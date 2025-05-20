# Builder Image
FROM python:3.8-slim-buster AS compile
WORKDIR /app
RUN mkdir -p Face_Detection/Gray_Image
RUN mkdir -p Face_Detection/image
RUN mkdir -p Face_Detection/Imageforauthentication


# Install system dependencies
RUN apt-get -y update && apt-get install -y --fix-missing \
    build-essential \
    cmake \
    gfortran \
    git \
    wget \
    curl \
    graphicsmagick \
    libgraphicsmagick1-dev \
    libatlas-base-dev \
    libavcodec-dev \
    libavformat-dev \
    libgtk2.0-dev \
    libjpeg-dev \
    liblapack-dev \
    libswscale-dev \
    pkg-config \
    python3-dev \
    python3-numpy \
    software-properties-common \
    zip \
    libgl1-mesa-glx \
    libglib2.0-0 \
    ffmpeg libsm6 libxext6 \
    && apt-get clean && rm -rf /tmp/* /var/tmp/*

# Virtual Environment
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Upgrade pip and install Python packages inside the virtual environment
RUN pip install --upgrade pip

# Install Dlib
ENV CFLAGS=-static
RUN git clone -b 'v19.21' --single-branch https://github.com/davisking/dlib.git && \
    cd dlib/ && \
    python setup.py install --set BUILD_SHARED_LIBS=OFF

# Install Python packages
RUN pip install flask opencv-python face_recognition flask-cors requests

# # Add our packages
ENV PATH="/opt/venv/bin:$PATH"

COPY . /app
EXPOSE 5000
CMD ["python", "app.py"]
