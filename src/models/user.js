const { default: mongoose, Schema, Model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, minLength: 3, maxlength: 50 },
    lastName: { type: String },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowersase: true,
      trim: true,
    },
    password: { type: String },
    age: { type: Number, min: 18 },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    about: { type: String, default: "This is default about of the user!" },
    skills: { type: [String] },
    photoUrl: { type: String, default: "https://mmox.me/img/profile.png" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
