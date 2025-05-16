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
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Create and activate a virtual environment
WORKDIR /app
RUN python3 -m venv /opt/venv

# Ensure pip is upgraded inside the virtual environment
RUN /opt/venv/bin/pip install --upgrade pip setuptools wheel numpy dlib

# Add virtualenv to PATH
ENV PATH="/opt/venv/bin:$PATH"

# Install dependencies from requirements.txt
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the application code
COPY . .

# Run the application using the virtual environment's Python
CMD ["python", "app.py"]
