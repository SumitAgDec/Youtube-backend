import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from 'fs'

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudnary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type : auto
        })
        // file hase been uploaded succesfully
        console.log('file is uploaded on cloudinary', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temprory as the upload operation got failed
    }
}

export {uploadOnCloudnary}