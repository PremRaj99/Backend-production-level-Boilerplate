import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const uploadResult = await cloudinary.uploader
      .upload(localFilePath, {
        resource_type: "auto",
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(uploadResult);
    console.log("File is uploaded on Cloudinary : ", uploadResult.url);
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temp file as the operation got failed
  }
};

export default uploadOnCloudinary;