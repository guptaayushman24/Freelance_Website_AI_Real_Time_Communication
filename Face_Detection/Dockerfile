FROM python:3.10-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    g++ \
    libopenblas-dev \
    liblapack-dev \
    libx11-dev \
    libgtk-3-dev \
    libboost-all-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /Face_Detection

COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install dlib==19.22.1
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]
