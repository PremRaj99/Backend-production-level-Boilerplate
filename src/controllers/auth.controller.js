import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiRespose } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/fileUpload.js";

export const signup = asyncHandler(async (req, res, next) => {
  const { fullName, email, username, password } = req.body;

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required!");
  }
  const existUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existUser) {
    throw new ApiError(409, "User with this email or username already exists!");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  // console.log("Avatar Path:", avatarLocalPath)
  // console.log("Cover Image Path:", coverImageLocalPath);

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar files are required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverIamge = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar files are required");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverIamge.url,
    email,
    password,
    username: username.toLowerCase(),
  });

  const createUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  return res
    .status(201)
    .json(new ApiRespose(200, createUser, "user registered successfully"));
});


export const login = asyncHandler(async (req, res, next) => {});
export const signout = asyncHandler(async (req, res, next) => {});
