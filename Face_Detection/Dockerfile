# # Builder Image
# FROM python:3.8-slim-buster AS compile
# WORKDIR /app


# # Install Dependencies
# RUN apt-get -y update && apt-get install -y --fix-missing \
#     build-essential \
#     cmake \
#     gfortran \
#     git \
#     wget \
#     curl \
#     graphicsmagick \
#     libgraphicsmagick1-dev \
#     libatlas-base-dev \
#     libavcodec-dev \
#     libavformat-dev \
#     libgtk2.0-dev \
#     libjpeg-dev \
#     liblapack-dev \
#     libswscale-dev \
#     pkg-config \
#     python3-dev \
#     python3-numpy \
#     software-properties-common \
#     zip \
#     && apt-get clean && rm -rf /tmp/* /var/tmp/*

# # Virtual Environment
# ENV VIRTUAL_ENV=/opt/venv
# RUN python3 -m venv $VIRTUAL_ENV
# ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# # Install Dlib
# ENV CFLAGS=-static
# RUN pip3 install --upgrade pip && \
#     git clone -b 'v19.21' --single-branch https://github.com/davisking/dlib.git && \
#     cd dlib/ && \
#     python3 setup.py install --set BUILD_SHARED_LIBS=OFF




# # Runtime Image
# FROM python:3.8-slim-buster

# COPY --from=compile /opt/venv /opt/venv
# COPY --from=compile \
#     # Sources
#     /lib/x86_64-linux-gnu/libpthread.so.0 \
#     /lib/x86_64-linux-gnu/libz.so.1 \
#     /lib/x86_64-linux-gnu/libm.so.6 \
#     /lib/x86_64-linux-gnu/libgcc_s.so.1 \
#     /lib/x86_64-linux-gnu/libc.so.6 \
#     /lib/x86_64-linux-gnu/libdl.so.2 \
#     /lib/x86_64-linux-gnu/librt.so.1 \
#     # Destination
#     /lib/x86_64-linux-gnu/

# COPY --from=compile \
#     # Sources
#     /usr/lib/x86_64-linux-gnu/libX11.so.6 \
#     /usr/lib/x86_64-linux-gnu/libXext.so.6 \
#     /usr/lib/x86_64-linux-gnu/libpng16.so.16 \
#     /usr/lib/x86_64-linux-gnu/libjpeg.so.62 \
#     /usr/lib/x86_64-linux-gnu/libstdc++.so.6 \
#     /usr/lib/x86_64-linux-gnu/libxcb.so.1 \
#     /usr/lib/x86_64-linux-gnu/libXau.so.6 \
#     /usr/lib/x86_64-linux-gnu/libXdmcp.so.6 \
#     /usr/lib/x86_64-linux-gnu/libbsd.so.0 \
#     # Destination
#     /usr/lib/x86_64-linux-gnu/

# RUN pip3 install flask
# RUN pip3 install opencv-python
# RUN pip3 install face-recognition

# RUN apt-get update && \
#         apt-get install -y libgl1-mesa-glx

# RUN apt-get update && \
#     apt-get install -y ffmpeg libsm6 libxext6



# # Add our packages
# ENV PATH="/opt/venv/bin:$PATH"

# COPY . /app
# EXPOSE 5001
# CMD ["python", "app/app.py"]

# Builder Image
FROM python:3.8-slim-buster AS compile
WORKDIR /app

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
