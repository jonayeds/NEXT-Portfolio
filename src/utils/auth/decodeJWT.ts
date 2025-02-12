import jwt from "jsonwebtoken";
export type DecodedUser = {
    email:string;
    role:"admin"|"user";
    iat:number;
    exp:number;
}
export const decodeAccessToken = (token:string)=>{
    
  if (!token) return null;

  try {
    const decoded = jwt.decode(token) as DecodedUser | null; 
    console.log(decoded);
    return decoded;
  } catch (error) {
    console.error("Invalid Token", error);
    return null;
  }
}