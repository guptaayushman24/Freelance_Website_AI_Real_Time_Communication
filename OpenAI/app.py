from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import pdfplumber
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")
if (len(openai.api_key)==0):
    print("Key not found")
    
@app.route('/analyze', methods=['POST'])
def analyze_resume():
    if 'resume' not in request.files or 'job' not in request.form:
        return jsonify({"error": "Missing data"}), 400

    file = request.files['resume']
    job_desc = request.form['job']

    # Extract text from PDF
    with pdfplumber.open(file) as pdf:
        text = "\n".join(page.extract_text() for page in pdf.pages if page.extract_text())

    prompt = f"""
You are an expert resume editor and job consultant.

Please:
1. Correct grammar and improve writing style.
2. Analyze how well the resume matches the following job description.
3. Suggest what skills, experiences, or keywords are missing based on the job.

Return only the improved resume followed by suggestions.

---
Resume:
{text}

---
Job Description:
{job_desc}
"""

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                { "role": "system", "content": "You are a helpful resume assistant." },
                { "role": "user", "content": prompt }
            ],
            max_tokens=1000,
            temperature=0.7
        )
        result = response['choices'][0]['message']['content']
        return jsonify({ "result": result })

    except Exception as e:
        print(e)
        return jsonify({ "error": "Something went wrong" }), 500


if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True,port=5000)
