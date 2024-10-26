import express from "express";
import { login, refreshAccessToken, signout, signup } from "../controllers/auth.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post(
  "/signup",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  signup
);
router.post("/signout", verifyJWT, signout);
router.post("/refresh", refreshAccessToken);

export default router;
