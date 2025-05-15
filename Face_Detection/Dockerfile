FROM python:3.10

RUN apt-get update && apt-get install -y \
    build-essential cmake \
    libopenblas-dev liblapack-dev \
    libx11-dev libgtk-3-dev \
    libboost-all-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /Face_Detection

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install face_recognition
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]
