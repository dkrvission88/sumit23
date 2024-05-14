import jwt from "jsonwebtoken";
import { Contractor } from "../models/contractor-model.js";

// export const checkContractorAuth = async (req, res, next) => {
//   let token;
//   const { authorization } = req.headers;
//   if (authorization && authorization.startsWith("Bearer")) {
//     try {
//       // get token from header
//       token = authorization.split(" ")[1];
//       // verify token
//       const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
//       // get user from token
//       req.user = await Contractor.findById(userID).select('-password');
//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401).send({ status: "failed", message: "Unauthorized User" });
//     }
//   }
//   if (!token) {
//     res
//       .status(401)
//       .send({ status: "failed", message: "Unauthorized User, No token" });
//   }
// };



export const checkContractorAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  console.log("Authorization Header:", authorization); // Log authorization header
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from header
      token = authorization.split(" ")[1];
      console.log("Token:", token); // Log extracted token
      // verify token
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log("Decoded Token:", userID); // Log decoded token
      // get user from token
      req.user = await Contractor.findById(userID).select('-password');
      console.log("User:", req.user); // Log user details
      next();
    } catch (error) {
      console.error("Token Verification Error:", error); // Log token verification error
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  } else {
    console.log("No Token Provided");
    res
      .status(401)
      .send({ status: "failed", message: "Unauthorized User, No token" });
  }
};