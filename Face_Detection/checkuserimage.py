import os
import base64
import face_recognition
import io
import numpy as np
from PIL import Image
from datetime import datetime
def checkuserimageisvalid(imagestring, userid):
    try:
        base_dir = os.getcwd()
        print("👋 Hello from checkuserimageisvalid")

        # Step 1: Decode base64 image and save for debug
        if ',' in imagestring:
            base64Image = imagestring.split(',')[1]
        else:
            base64Image = imagestring

        image_bytes = base64.b64decode(base64Image)
        image = Image.open(io.BytesIO(image_bytes)).convert('RGB')

        # decoded_folder = 'D:/Freelance_Project/Face_Detection/DecodedImages'
        # decoded_folder = os.path.join('DecodedImages')
        decoded_folder = os.path.join(base_dir,'DecodedImages')
        os.makedirs(decoded_folder, exist_ok=True)

        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        decoded_path = os.path.join(decoded_folder, f'debug_decoded_{timestamp}.jpg')
        image.save(decoded_path)
        print(f"✅ Saved decoded image to: {decoded_path}")

        # Step 2: Encode just the most recent decoded image
        decoded_img = face_recognition.load_image_file(decoded_path)
        decoded_encodings = face_recognition.face_encodings(decoded_img)

        if not decoded_encodings:
            print("❌ No face found in decoded image.")
            return -1

        decoded_encoding = decoded_encodings[0]

        # Step 3: Compare against stored images
        # stored_faces_folder = 'D:/Freelance_Project/Face_Detection/Imageforauthentication'
        # stored_faces_folder = os.path.join('Imageforauthentication')
        stored_faces_folder = os.path.join(base_dir,'Imageforauthentication')
        image_files = [f for f in os.listdir(stored_faces_folder) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

        for image_file in image_files:
            stored_image_path = os.path.join(stored_faces_folder, image_file)
            try:
                stored_image = face_recognition.load_image_file(stored_image_path)
                stored_encodings = face_recognition.face_encodings(stored_image)

                if not stored_encodings:
                    print(f"⚠️ No face found in stored image: {image_file}")
                    continue

                stored_encoding = stored_encodings[0]

                distance = face_recognition.face_distance([stored_encoding], decoded_encoding)[0]
                is_match = distance < 0.45  # Stricter threshold

                print(f"🧪 Comparing with {image_file} | Distance: {distance:.4f} | Match: {is_match}")

                if is_match:
                    print(f"✅ Match found! UserID: {userid} | Image: {image_file}")
                   

                    return userid

            except Exception as e:
                print(f"❌ Error processing stored image {image_file}: {e}")
                continue

        print("❌ No match found with any stored image.")
        
        return -1

    except Exception as e:
        print("🚨 An error occurred in checkuserimageisvalid:")
        print(e)
        return -1

