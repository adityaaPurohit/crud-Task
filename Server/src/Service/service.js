import { taskModal } from "../config/config";
import { hashPassword } from "../utils/hashPassword";
import { comparePassword } from "../utils/comparePs";

// Register
const registerUser = async (data) => {
  const isExist = await taskModal.findOne({ email: data.email });
  if (isExist) {
    throw new Error("User is already exist!!");
  } else {
    // Encript password using bcrypt
    const password = await hashPassword(data.password);
    const createUser = {
      ...data,
      password,
    };
    const createNewUser = await taskModal.create(createUser);
    if (!createNewUser) {
      throw new Error("Something went wrong!, please try again");
    } else {
      return createNewUser;
    }
  }
};

// Login
const loginUser = async (data) => {
  const isExist = await taskModal.findOne({ email: data.email });
  if (!isExist) {
    throw new Error("User Not Found");
  } else {
    // Compare password using bcrypt
    const password = await comparePassword(data.password, isExist.password);
    if (password) {
      return isExist;
    } else {
      throw new Error("Plese enter correwct password");
    }
  }
};

// All user list
const getAllUsers = async () => {
  const getUsers = await taskModal.find();
  if (!getUsers) {
    throw new Error("No data Found");
  } else {
    return getUsers;
  }
};

// User Profile
const getUserProfile = async (data) => {
  const getuser = await taskModal.findOne({ email: data.email });
  if (!getuser) {
    throw new Error("No data Found");
  } else {
    return getuser;
  }
};

// Delete User
const userDelete = async (data) => {
  console.log("data", data);
  const isExist = await taskModal.findOne({ _id: data.id });
  if (!isExist) {
    throw new Error("No data Found");
  } else {
    const user = await taskModal.remove({ _id: data.id });
    if (!user) {
      throw new Error("Something went wrong ");
    } else {
      return user;
    }
  }
};

// User Profile Upload
const uploadProfile = async (data, Image) => {
  const userProfile = await taskModal.findOne({ email: data.email });
  if (!userProfile) {
    throw new Error("No data Found");
  } else {
    const upImgage = await taskModal.updateOne(
      { email: userProfile.email },
      { Image: Image }
    );
    if (!upImgage) {
      throw new Error("Something went wrong please try again");
    } else {
      return userProfile;
    }
  }
};

export {
  registerUser,
  getAllUsers,
  loginUser,
  getUserProfile,
  userDelete,
  uploadProfile,
};
