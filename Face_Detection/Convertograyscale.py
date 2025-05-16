import cv2
import os
import uuid
from datetime import datetime
# folder_path_captured_image = 'D:/Freelance_Project/Face_Detection/image'
folder_path_captured_image = os.path.join('image')
# folder_path_gray_image = 'D:/Freelance_Project/Face_Detection/Gray_Image'
folder_path_gray_image = os.path.join('Gray_Image')
def convertimagetograyscale (imagetoconvert,output_filename) :
    try:
        original_image = cv2.imread(imagetoconvert)

        gray_image = cv2.cvtColor(original_image,cv2.COLOR_BGR2GRAY)
        save_path = os.path.join(folder_path_gray_image,output_filename)

        cv2.imwrite(save_path,gray_image)
        print(f"Grayscale image saved at:{save_path}")
    except :
        print("An exception occured")


# Making sure gray folder exist
os.makedirs(folder_path_gray_image, exist_ok=True)

imagepathfiles = os.listdir(folder_path_captured_image)
image_files = [f for f in imagepathfiles if f.endswith(('.jpg', '.jpeg', '.png'))]


