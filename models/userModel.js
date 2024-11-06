const mongoose = require("mongoose");
const slugify = require("slugify");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, // remove whitespace in beginning and end
      required: [true, "Name is required"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [
        8,
        "Password should be at least 8 characters long and have special characters",
      ],
    },
    phone: String,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
