import multer from "multer";

const storage = multer.memoryStorage(); //because we are storing the file in memory and uploading it to cloudinary

export const singleUpload = multer({ storage }).single("file");

//for update profile section
export const updateUpload = multer({ storage }).fields([
    { name: "file", maxCount: 1 }, //for resume
    { name: "profilePicture", maxCount: 1 }, //for profile picture
]);