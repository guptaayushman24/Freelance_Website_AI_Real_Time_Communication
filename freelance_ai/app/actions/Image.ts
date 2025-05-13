'use server'
import fs from 'fs'
import path from 'path'
export default async function storeImage(imagepath:string){
    try{
        const base64Image = imagepath.replace(/^data:image\/\w+;base64,/, '');

        const imageBuffer = Buffer.from(base64Image,'base64');
        const savePath = path.join('D:/Freelance_Project/Face_Detection' ,'image','my-captured-image.jpg');

        // Ensuring directly exist
        const dir = path.dirname(savePath);
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir,{recursive:true})
        }
        // Write to file
        fs.writeFileSync(savePath,imageBuffer);
        console.log(`Image saved at: ${savePath}`);
        return{
            status:true,
            savedTo:savePath
        }
    }
    catch(err){
        console.error(err);
    }
}