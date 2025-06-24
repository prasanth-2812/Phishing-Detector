from flask import Flask, request, render_template, flash, redirect, url_for 
import pandas as pd 
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier 
from urllib.parse import urlparse
import requests
import numpy as np 
import re
import PyPDF2 
from io import BytesIO

app = Flask(__name__)
app.secret_key = "super_secret_key"  # Needed for flash messages

# Load and train the URL model
try:
    url_data = pd.read_csv("urls.csv", encoding='utf-8')
except FileNotFoundError:
    print("Error: urls.csv not found. Please create the file with URL data.")
    exit(1)
except Exception as e:
    print(f"Error reading urls.csv: {e}")
    exit(1)

url_vectorizer = TfidfVectorizer()

def extract_url_features(url):
    parsed = urlparse(url)
    features = {
        "length": len(url),
        "has_https": 1 if parsed.scheme == "https" else 0,
        "has_at": 1 if "@" in url else 0,
        "has_hyphen": 1 if "-" in url else 0,
        "has_login": 1 if "login" in url.lower() else 0,
        "has_verify": 1 if "verify" in url.lower() else 0,
        "num_dots": url.count("."),
        "num_slashes": url.count("/"),
    }
    return features

url_features = url_vectorizer.fit_transform(url_data["URL"])
url_tfidf_columns = [str(i) for i in range(url_features.shape[1])]
url_custom_features = url_data["URL"].apply(extract_url_features).apply(pd.Series)
X_url = pd.concat([pd.DataFrame(url_features.toarray(), columns=url_tfidf_columns), url_custom_features], axis=1)
y_url = url_data["Label"]
url_model = RandomForestClassifier(n_estimators=100, random_state=42)
url_model.fit(X_url, y_url)

# Load and train the Email model
try:
    email_data = pd.read_csv("emails.csv", encoding='utf-8')
except FileNotFoundError:
    print("Error: emails.csv not found. Creating a default emails.csv file...")
    default_email_data = pd.DataFrame({
        "Email": [
            "Urgent: Verify your account now at http://fake-login.com",
            "Hello, here is your invoice for this month",
            "Click here to claim your prize! http://scam-site.com",
            "Meeting scheduled for tomorrow at 10 AM",
            "Congratulations! Immediate hiring for a high salary job, apply now at http://fake-job.com",
            "Your Amazon account needs verification, click here: http://amazon-security.com",
            "Work from home opportunity, apply now at http://scam-job.com",
            "Your PayPal payment failed, update now at http://paypal-security.com"
        ],
        "Label": [1, 0, 1, 0, 1, 1, 1, 1]
    })
    default_email_data.to_csv("emails.csv", index=False)
    email_data = pd.read_csv("emails.csv", encoding='utf-8')
except Exception as e:
    print(f"Error reading emails.csv: {e}")
    exit(1)

email_vectorizer = TfidfVectorizer()

def extract_email_features(content):
    features = {
        "length": len(content),
        "has_urgent": 1 if "urgent" in content.lower() else 0,
        "has_verify": 1 if "verify" in content.lower() else 0,
        "has_login": 1 if "login" in content.lower() else 0,
        "has_account": 1 if "account" in content.lower() else 0,
        "has_click": 1 if "click" in content.lower() else 0,
        "num_exclamations": content.count("!"),
        "has_url": 1 if re.search(r'http[s]?://', content) else 0,
        "has_job": 1 if "job" in content.lower() or "hiring" in content.lower() or "apply" in content.lower() else 0,
        "has_work_from_home": 1 if "work from home" in content.lower() else 0,
        "has_salary": 1 if "salary" in content.lower() else 0,
        "has_immediate": 1 if "immediate" in content.lower() or "apply now" in content.lower() else 0,
        "has_company_keywords": 1 if any(kw in content.lower() for kw in ["amazon", "paypal", "google", "microsoft"]) else 0,
        "has_payment": 1 if "payment" in content.lower() or "update" in content.lower() else 0,
        "has_joining_bonus": 1 if "joining bonus" in content.lower() else 0,
        "has_sign_here": 1 if "sign here" in content.lower() else 0,
    }
    return features

email_features = email_vectorizer.fit_transform(email_data["Email"])
email_tfidf_columns = [str(i) for i in range(email_features.shape[1])]
email_custom_features = email_data["Email"].apply(extract_email_features).apply(pd.Series)
X_email = pd.concat([pd.DataFrame(email_features.toarray(), columns=email_tfidf_columns), email_custom_features], axis=1)
y_email = email_data["Label"]
email_model = RandomForestClassifier(n_estimators=100, random_state=42)
email_model.fit(X_email, y_email)

def analyze_url(url):
    report = {"Type": "URL", "Content": url, "Warnings": [], "Phishing_Score": 0}
    parsed = urlparse(url)

    if parsed.scheme != "https":
        report["Warnings"].append("No HTTPS")
        report["Phishing_Score"] += 30
    if len(url) > 75:
        report["Warnings"].append("Unusually long URL")
        report["Phishing_Score"] += 20
    if '@' in url:
        report["Warnings"].append("Suspicious '@' character")
        report["Phishing_Score"] += 20
    if '-' in url:
        report["Warnings"].append("Suspicious '-' character")
        report["Phishing_Score"] += 15
    if "login" in url.lower() or "verify" in url.lower():
        report["Warnings"].append("Suspicious keyword in URL")
        report["Phishing_Score"] += 20
    if url.count(".") > 3:
        report["Warnings"].append("Too many subdomains")
        report["Phishing_Score"] += 15
    try:
        response = requests.get(url, timeout=5)
        if "login" in response.text.lower() or "verify" in response.text.lower():
            report["Warnings"].append("Suspicious keyword in content")
            report["Phishing_Score"] += 30
    except:
        report["Warnings"].append("URL not accessible")
        report["Phishing_Score"] += 20

    url_features = url_vectorizer.transform([url])
    custom_features = pd.DataFrame([extract_url_features(url)])
    combined_features = pd.concat([pd.DataFrame(url_features.toarray(), columns=url_tfidf_columns), custom_features], axis=1)
    ml_pred = url_model.predict(combined_features)[0]
    report["ML_Prediction"] = "Phishing" if ml_pred == 1 else "Safe"
    report["Phishing_Score"] += 15 if ml_pred == 1 else 0

    report["Verdict"] = "Likely Phishing" if report["Phishing_Score"] > 50 else "Likely Safe"
    return report

def analyze_email(content, content_type="Email"):
    report = {"Type": content_type, "Content": content, "Warnings": [], "Phishing_Score": 0, "Category": "General"}

    if "urgent" in content.lower():
        report["Warnings"].append("Contains 'urgent' keyword")
        report["Phishing_Score"] += 30
    if "verify" in content.lower() or "login" in content.lower():
        report["Warnings"].append("Contains suspicious keywords (verify/login)")
        report["Phishing_Score"] += 20
    if "account" in content.lower():
        report["Warnings"].append("Contains 'account' keyword")
        report["Phishing_Score"] += 15
    if "click" in content.lower():
        report["Warnings"].append("Contains 'click' keyword")
        report["Phishing_Score"] += 20
    if content.count("!") > 2:
        report["Warnings"].append("Too many exclamation marks")
        report["Phishing_Score"] += 15

    job_keywords = ["job", "hiring", "apply", "work from home", "salary"]
    urgency_keywords = ["immediate", "apply now"]
    has_job_keywords = any(kw in content.lower() for kw in job_keywords)
    has_urgency = any(kw in content.lower() for kw in urgency_keywords)
    if has_job_keywords and has_urgency:
        report["Warnings"].append("Possible fake job notification")
        report["Phishing_Score"] += 30
        report["Category"] = "Fake Job Notification"

    if content_type == "Offer Letter":
        if "joining bonus" in content.lower():
            report["Warnings"].append("Contains 'joining bonus' keyword")
            report["Phishing_Score"] += 20
        if "sign here" in content.lower():
            report["Warnings"].append("Contains 'sign here' keyword")
            report["Phishing_Score"] += 20
        if has_job_keywords:
            report["Warnings"].append("Job-related keywords detected")
            report["Phishing_Score"] += 15

    company_keywords = ["amazon", "paypal", "google", "microsoft"]
    has_company_keywords = any(kw in content.lower() for kw in company_keywords)
    has_payment_keywords = "payment" in content.lower() or "update" in content.lower()
    if has_company_keywords and has_payment_keywords:
        report["Warnings"].append("Possible fake company email")
        report["Phishing_Score"] += 30
        report["Category"] = "Fake Company Email"

    urls = re.findall(r'http[s]?://[^\s]+', content)
    if urls:
        report["Warnings"].append("Contains URLs")
        report["Phishing_Score"] += 20
        for url in urls:
            url_report = analyze_url(url)
            if url_report["Verdict"] == "Likely Phishing":
                report["Warnings"].append(f"Suspicious URL found: {url}")
                report["Phishing_Score"] += 30

    email_features = email_vectorizer.transform([content])
    custom_features = pd.DataFrame([extract_email_features(content)])
    combined_features = pd.concat([pd.DataFrame(email_features.toarray(), columns=email_tfidf_columns), custom_features], axis=1)
    ml_pred = email_model.predict(combined_features)[0]
    report["ML_Prediction"] = "Phishing" if ml_pred == 1 else "Safe"
    report["Phishing_Score"] += 15 if ml_pred == 1 else 0

    report["Verdict"] = "Likely Phishing" if report["Phishing_Score"] > 50 else "Likely Safe"
    return report

def extract_text_from_pdf(file):
    pdf_reader = PyPDF2.PdfReader(file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check', methods=['POST'])
def check():
    input_type = request.form.get('input_type')
    report = None

    if input_type == "url":
        content = request.form.get('url', '').strip()
        if not content:
            flash("Please enter a URL to check.", "error")
            return redirect(url_for('index'))
        report = analyze_url(content)
    elif input_type == "email":
        content = request.form.get('email', '').strip()
        if not content:
            flash("Please enter email content to check.", "error")
            return redirect(url_for('index'))
        report = analyze_email(content, "Email")
    elif input_type == "offer_letter":
        if 'offer_letter' not in request.files:
            flash("Please upload an offer letter (PDF).", "error")
            return redirect(url_for('index'))
        file = request.files['offer_letter']
        if file.filename == '':
            flash("Please upload an offer letter (PDF).", "error")
            return redirect(url_for('index'))
        if file and file.filename.endswith('.pdf'):
            content = extract_text_from_pdf(BytesIO(file.read()))
            if not content.strip():
                flash("The uploaded PDF is empty or unreadable.", "error")
                return redirect(url_for('index'))
            report = analyze_email(content, "Offer Letter")
        else:
            flash("Please upload a valid PDF file.", "error")
            return redirect(url_for('index'))
    else:
        flash("Invalid input type.", "error")
        return redirect(url_for('index'))

    return render_template('result.html', report=report)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        # Add your authentication logic here
        flash("Login functionality to be implemented.", "info")
        return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        if password != confirm_password:
            flash("Passwords do not match.", "error")
            return redirect(url_for('signup'))
        # Add your signup logic here
        flash("Signup functionality to be implemented.", "info")
        return redirect(url_for('index'))
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)