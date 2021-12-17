import {
  registerUser,
  getAllUsers,
  loginUser,
  getUserProfile,
  userDelete,
  uploadProfile,
} from "../Service/service";
import { jwtAuth } from "../utils/jwtEncript";

// Register
const register = async (req, res) => {
  try {
    const { body } = req;
    const { name, email, password } = body;
    const register_User = await registerUser(body);

    res.status(200).send({
      data: register_User,
      success: true,
      message: "User Registered Successfully.",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message || error,
    });
  }
};

// Login
const userLogin = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const login_User = await loginUser(body);
    const payload = { ...login_User };
    const token = await jwtAuth(payload);
    res.status(200).send({
      email: login_User.email,
      data: token,
      success: true,
      message: "User loged in Successfully.",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message || error,
    });
  }
};

// All Users
const AllUsers = async (req, res) => {
  try {
    const all_Users = await getAllUsers();

    res.status(200).send({
      data: all_Users,
      success: true,
      message: "All Users ",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message || error,
    });
  }
};

// User Profile
const Profileuser = async (req, res) => {
  try {
    const { body } = req;
    const { email } = body;
    const profile_user = await getUserProfile(body);

    res.status(200).send({
      data: profile_user,
      success: true,
      message: "User's profiel",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message || error,
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { body } = req;
    const { id } = body;

    const delete_user = await userDelete(body);

    res.status(200).send({
      success: true,
      message: "User deleted succefully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message || error,
    });
  }
};

// Profile Picture upload
const profilePic = async (req, res) => {
  try {
      console.log(req.file)
      console.log(req.body)

      const { body } = req;
    const { email } = body;
    //Image upload using Multer
    const Image = req.file.originalname;

    const profileUpload = await uploadProfile(body, Image);
    res.status(200).send({
      success: true,
      message: "User profile uploaded succefully",
      data: profileUpload,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message || error,
    });
  }
};

getUserProfile;
export { register, AllUsers, userLogin, Profileuser, deleteUser, profilePic };
