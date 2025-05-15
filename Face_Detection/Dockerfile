FROM python:3.10-slim

# Install system dependencies needed for dlib and face_recognition
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    pkg-config \
    libx11-dev \
    libatlas-base-dev \
    libgtk-3-dev \
    libboost-python-dev \
    libboost-thread-dev \
    libboost-system-dev \
    libboost-filesystem-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy requirements and upgrade pip
COPY requirements.txt .
RUN pip install --upgrade pip

# Install requirements (including face_recognition)
RUN pip install -r requirements.txt

# Copy app source
COPY . .

# Start the app (change if needed)
CMD ["python", "app.py"]
