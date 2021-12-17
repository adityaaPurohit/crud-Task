import express from "express";
import { uploads } from "../utils/uploads";
import {
  register,
  AllUsers,
  userLogin,
  Profileuser,
  deleteUser,
  profilePic,
} from "../controller/controller";
import { authorization } from "../middleware/middeleware";

const routers = express
  .Router()
  .post("/register", register)
  .post("/login", userLogin)
  .get("/allUsers", authorization, AllUsers)
  .post("/userProfile", authorization, Profileuser)
  .post("/deleteuser", authorization, deleteUser)
  //   Multer single image upload
  .post("/profilePic", uploads.single("Image"),authorization, profilePic);
export { routers };
