FROM ubuntu:latest

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    libopenblas-dev \
    liblapack-dev \
    libx11-dev \
    libgtk-3-dev \
    python3 \
    python3-dev \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install build tools
RUN pip3 install --upgrade pip setuptools wheel

# Install numpy before dlib
RUN pip3 install numpy

# Install dlib (can take time)
RUN pip3 install dlib

# Set working directory
WORKDIR /app

# Copy requirements and install them
COPY requirements.txt .
RUN pip3 install -r requirements.txt

# Copy rest of your app
COPY . .

# Set the entrypoint to run your Flask app
CMD ["python3", "app.py"]
