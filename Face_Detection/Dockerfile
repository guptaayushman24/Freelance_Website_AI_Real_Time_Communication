FROM ubuntu:latest

# Install system dependencies needed for dlib and your app
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    cmake \
    libopenblas-dev \
    liblapack-dev \
    libx11-dev \
    libgtk-3-dev \
    python3 \
    python3-dev \
    python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Upgrade pip and install wheel and setuptools for better package building
RUN pip3 install --upgrade pip setuptools wheel

# Install numpy first (dlib requires numpy)
RUN pip3 install numpy

# Install dlib separately (can take a while, but needed)
RUN pip3 install dlib

# Copy your requirements file and install the rest of your dependencies
COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy your app code
COPY . /app

# Command to run your Flask app (change if necessary)
CMD ["python3", "app.py"]
