//generate dataURI
import dataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file)=>{ //in this file path is given
  const parser = new dataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
}

export default getDataUri;