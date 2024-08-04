import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,  
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload file on cloudinary
const uploadCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        const reponse = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file successfully uploaded
        console.log("file is uploaded on cloudinary",reponse.url);
        return reponse
    } catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
         }
} 

export {uploadCloudinary}