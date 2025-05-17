FROM animcogn/face_recognition:gpu

COPY requirements.txt requirements.txt

RUN pip3 install -r ./requirements.txt

COPY Face_Detection /Face_Detection

CMD [ "python3", "/Face_Detection/app.py" ]