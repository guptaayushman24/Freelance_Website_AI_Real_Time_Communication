from Convertograyscale import convertimagetograyscale
from checkuserimage import checkuserimageisvalid
from flask import Flask,request
from flask_cors import CORS
import base64
import os
import requests
import json
import uuid
from datetime import datetime
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}},supports_credentials=True)
@app.route('/',methods=["GET","POST"])
def hello_word():
    return "Hello,World!"

@app.route('/storefaceindb',methods=["POST"])
def storefaceindb():
    try:

        data = request.get_json()
        print("Data is",data)
        if not data or 'data' not in data or 'userid' not in data:
            return {'status': 'error', 'message': 'Missing data or userid'}, 400
            
        
        imagestring = data['data']
        userid = data['userid']
        base64Image = imagestring.split(',')[1]

       
        image_bytes = base64.b64decode(base64Image)

        # Give image a unique name
        unique_filename = f"{datetime.now().strftime('%Y%m%d%H%M%S')}_{uuid.uuid4().hex}.jpg"
        save_path = os.path.join('D:/Freelance_Project/Face_Detection', 'image', unique_filename)

        os.makedirs(os.path.dirname(save_path),exist_ok=True)
        with open(save_path,'wb') as f:
            f.write(image_bytes)

        # Convert the image to the gray image
        convertimagetograyscale(save_path,unique_filename)

       

        gray_image_folder_path = 'D:/Freelance_Project/Face_Detection/Gray_Image'
        grayimagepathfiles = sorted(
            [f for f in os.listdir(gray_image_folder_path) if f.endswith(('.jpg', '.jpeg', '.png'))],
            key=lambda x: os.path.getmtime(os.path.join(gray_image_folder_path, x)),
            reverse=True
        )
        gray_image_files = [f for f in grayimagepathfiles if f.endswith(('.jpg','.jpeg','.png'))]
        if gray_image_files:
            gray_image_path = os.path.join(gray_image_folder_path,gray_image_files[0])
            
            # Open the image in binary mode
            if grayimagepathfiles:
                latest_gray_image_path = os.path.join(gray_image_folder_path, grayimagepathfiles[0])
                with open(latest_gray_image_path, 'rb') as image_file:
                    gray_image_data = image_file.read()
                    encoded_gray_image = base64.b64encode(gray_image_data)

                response = requests.post('http://localhost:4001/prismaschema', json={
                    'imagestring': encoded_gray_image.decode('utf-8'),
                    'userid': userid
            })
           
            
           
        else :
            print("No gray image found")

        return {'status':'success'},200
    
    except Exception as e :
        print("An exception occured")
        return {'status':'error','message':str(e)},500





@app.route('/storeimageinfolder', methods=['POST'])
def storeimageinfolder():
    try:
        data = request.get_json()
        if not data:
            return {'status': 'error', 'message': 'Missing data'}, 400

        imagestring = data['data']
        base64Image = imagestring.split(',')[1]

        image_bytes = base64.b64decode(base64Image)
        filename = f"auth_image_{datetime.now().strftime('%Y%m%d_%H%M%S')}_{uuid.uuid4().hex[:6]}.jpg"
        save_path = os.path.join(
        'D:/Freelance_Project/Face_Detection',
        'Imageforauthentication',
        filename
    )

        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        with open(save_path, 'wb') as f:
            f.write(image_bytes)

        sizeofdb = requests.get('http://localhost:4001/findthesizeofdb')
        
        if sizeofdb.status_code == 200:
            json_data = sizeofdb.json()
            size = json_data.get('data')
            print("Size is",size)
            for x in range(size):
                print(f"How many times you run {x}")
                response = requests.get('http://localhost:4001/getallimagestring')
                if response.status_code == 200:
                    try:
                        data = response.json()
                        for record in data:
                            imagestring = record.get('imagestring')
                            userid = record.get('userid')

                            global user_id
                            user_id = checkuserimageisvalid(imagestring, userid)
                            if user_id != -1:
                                print(f"User id is {user_id}")
                                return {'status': 'success', 'user_id': user_id}
                            
                            x = x+1

                        return {'status': 'success', 'user_id': -1}

                    except ValueError:
                        print("Response content is not valid JSON.")

            return {'status': 'success'}, 200

        else:
            return {'status': 'error', 'message': 'Failed to get DB size'}, 500

    except Exception as e:
        print(e)
        return {'status': 'error', 'message': str(e)}, 500


    
@app.route('/senduserid',methods=["GET"])
def senduserid() :
    try:
        return {'status':'message','user_id':user_id}
    except Exception as e:
        return {'status':'error','message':str(e)},500

if (__name__=='__main__') :
    app.run(debug=True,port=5000)