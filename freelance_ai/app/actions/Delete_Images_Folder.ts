'use server'
import fs from 'fs'
import path from 'path';

export default async function deleteimagesfromfolder (folderPath:string){
 try{
       fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('❌ Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Check if it's a file with a supported image extension
    if (file.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`❌ Error deleting file ${file}:`, err);
        } else {
          console.log(`🗑️ Deleted image file: ${file}`);
        }
      });
    }
  });
});

 }
 catch(err){
    console.log("Some exception has occured in deleting the images from folder");
    return err;
 }
}


