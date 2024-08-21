import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) {
      res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10); // note: CreateHashPassword
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); // note: GenerateVarificationCode

    const user = new User({
      email,
      password: hashPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // info: 24 hour
    });
    user.save();

    generateTokenAndSetCookie(res, user._id); // note: GenerateJwt

    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
