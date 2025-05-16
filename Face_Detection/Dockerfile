FROM python:3.9-slim-buster

# Install system dependencies and clean up in one RUN step
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgl1-mesa-dev \
    libgl1-mesa-glx \
    libxi-dev \
    cmake \
    libboost-all-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
