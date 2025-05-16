# FROM python:3.9-slim

# # Install system dependencies for dlib, face_recognition, and OpenCV
# RUN apt-get update && apt-get install -y \
#     build-essential \
#     cmake \
#     pkg-config \
#     libx11-dev \
#     libatlas-base-dev \
#     libgtk-3-dev \
#     libglib2.0-0 \
#     libgl1-mesa-glx \
#     libboost-python-dev \
#     libboost-thread-dev \
#     libboost-system-dev \
#     libboost-filesystem-dev \
#     python3-dev \
#     && rm -rf /var/lib/apt/lists/*

# # Set working directory
# WORKDIR /app

# # Copy requirements and install Python dependencies
# COPY requirements.txt .
# RUN pip install --upgrade pip
# RUN pip install -r requirements.txt

# # Copy source code
# COPY . .

# # Default command
# CMD ["python", "app.py"]

FROM python:3.9
    
    COPY requirements.txt .
    RUN pip install --upgrade pip
    RUN pip install face_recognition
    RUN pip install -r requirements.txt
    
    COPY . /app
    WORKDIR /app
    CMD ["python","app.py"]