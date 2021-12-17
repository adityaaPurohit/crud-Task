import { taskModal } from "../config/config";
import { verify } from "jsonwebtoken";

const authorization = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("Access denied. No token provided");
    const token =
      authorization && authorization.startsWith("Bearer ")
        ? authorization.slice(7, authorization.length)
        : null;
    const verifyToken = verify(token, "SecretKey");

    if (!verifyToken) throw new Error("Invalid Token");
    console.log("verifyToken", verifyToken._doc._id);
    const user = await taskModal.findOne({ _id: verifyToken._doc._id });
    if (!user) throw new Error("No User Found With That Token");

    req.currentUser = user;
    next();
  } catch (error) {
    // errorLogger(error.message, req.originalUrl);
    res.status(403).send({ success: false, message: error.message });
  }
};

export { authorization };
