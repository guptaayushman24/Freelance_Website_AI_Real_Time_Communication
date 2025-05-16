FROM python:3.9
    
    # COPY requirements.txt .
    # RUN apt-get update && \
    # apt-get install -y --no-install-recommends \
    # build-essential \
    # cmake \
    # libgtk-3-dev \
    # libboost-all-dev && \
    # rm -rf /var/lib/apt/lists/*

    RUN pip install dlib
    RUN pip install --upgrade pip
    RUN pip install face_recognition
    RUN pip install -r requirements.txt
    
    COPY . /app
    WORKDIR /app
    CMD ["python","app.py"]