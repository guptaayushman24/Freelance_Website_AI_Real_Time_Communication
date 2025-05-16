# FROM python:3.9
    
#     # COPY requirements.txt .
#     # RUN apt-get update && \
#     # apt-get install -y --no-install-recommends \
#     # build-essential \
#     # cmake \
#     # libgtk-3-dev \
#     # libboost-all-dev && \
#     # rm -rf /var/lib/apt/lists/*

#     RUN pip install dlib
#     RUN pip install --upgrade pip
#     RUN pip install face_recognition
#     RUN pip install -r requirements.txt
    
#     COPY . /app
#     WORKDIR /app
#     CMD ["python","app.py"]


   FROM python:3.9-slim-buster

   # Install system dependencies
   RUN apt-get update && apt-get install -y --no-install-recommends \
       build-essential \
       libgl1-mesa-dev \
       libgl1-mesa-glx \
       libxi-dev \
       cmake \
       boost-build \
       libboost-all-dev \
       # Optional: for CUDA support
       # nvidia-driver-dev

   # Clean up
   RUN apt-get clean && rm -rf /var/lib/apt/lists/*

   # Install Python packages
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt

   # Add your application code here
   COPY . .