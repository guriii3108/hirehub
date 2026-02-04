import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import Profile from "../models/profile.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber, role } = req.body;
        if (!fullName || !email || !password || !phoneNumber || !role) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        const user = await User.findOne({ email }); //because email is unique
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10); //hashing password for security
        //user.model.js
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber,
            role,
        });
        //profile.model.js -- because of refrence not embedding..(created empty refrence and linked .. hehe)
        const newProfile = await Profile.create({
            user: newUser._id,
            bio: "",
            skills: [],
            //later we add fields like resume, profile pic and all
        });

        //linking the user and profile on basis of id...
        newUser.profile = newProfile._id;
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            success: true,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        const user = await User.findOne({ email }).populate("profile");
        if (!user) {
            return res.status(400).json({
                message: "User does not exist",
                success: false,
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password",
                success: false,
            });
        }
        //check if role matches
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account type does not match",
                success: false,
            });
        }
        //generate token
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        //send token in cookie
        res.status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            })
            .json({
                message: `Welcome Back, ${user.fullName}`,
                success: true,
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    role: user.role,
                    profile: user.profile,
                },
            });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};

export const logout = async (req, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", {
                maxAge: 0,
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            })
            .json({
                message: "Logged out successfully",
                success: true,
            });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        //handle file upload -- like cloudinary and all later...

        //user must authenticated if they wanna update profile
        const userId = req.id; //middleware authentication(later)

        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        //updatinggg the user table here
        if (fullName) {
            user.fullName = fullName;
        }
        if (email) {
            user.email = email;
        }
        if (phoneNumber) {
            user.phoneNumber = phoneNumber;
        }

        await user.save(); //save changes

        //updatinggg the profile table here
        let profile = await Profile.findOne({ user: userId });
        if (!profile) {
            return res.status(404).json({
                message: "Profile not found",
                success: false,
            });
        }
        if (profile) {
            if (bio !==undefined) {
                profile.bio = bio || "";
            }
            if (skills !==undefined) {
                profile.skills = skills ?  skills.split(",") : [];
                //skills in string so we have to convert it into array
            }

            //resume and profile picture will be handled later

            await profile.save();
        }

        //refetch the user with updated profile
        user = await User.findById(userId).populate("profile");

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};
