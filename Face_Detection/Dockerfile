FROM bamos/dlib:latest

# Set working directory
WORKDIR /app

# Copy requirements first and install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the app code
COPY . .

# Run your app
CMD ["python", "app.py"]
