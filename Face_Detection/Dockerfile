FROM python:3.10-slim

# Install system packages for dlib
RUN apt-get update && apt-get install -y \
    build-essential cmake \
    libgtk-3-dev libboost-all-dev \
    libopenblas-dev liblapack-dev \
    libx11-dev g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]
