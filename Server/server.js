import express from "express";
import mongoose from "mongoose";
import { routers } from "./src/Routers/route";

import cors from "cors";
const app = express();

// Assign port
const PORT = process.env.PORT || 4000;

// MongoUrl for connection with database
const url = process.env.mongoURL || "mongodb://localhost:27017/task";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("done...");
});

// For allow form data
app.use(express.json());

// Enable cors
app.use(cors({ origin: "http://localhost:4200" }));

// Common router
app.use("/task", routers);

// Listen server on this port
app.listen(PORT, () => {
  console.log(process.env.PORT);
  console.log(`Server is Running on ${PORT}`);
});
