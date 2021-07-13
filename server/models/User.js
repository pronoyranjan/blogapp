const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://th.bing.com/th/id/OIP.W1fDzc69LNG8XTNGzl6KXwHaHa?pid=ImgDet&rs=1"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);