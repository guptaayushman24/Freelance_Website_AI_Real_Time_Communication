FROM animcogn/face_recognition:gpu

COPY requirements.txt requirements.txt

RUN pip3 install -r ./requirements.txt

COPY my_app /my_app

CMD [ "python3", "/Face_Detection/app.py" ]