// mongodb+srv://atulSagotra:mdi5EigpTCI9V5Xk@namastenode.zwalvbm.mongodb.net/
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://atulSagotra:mdi5EigpTCI9V5Xk@namastenode.zwalvbm.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
// connectDB()
//   .then(() => {
//     console.log("Database connection established...");
//   })
//   .catch((err) => {
//     console.error("Database cannot be connected!!");
//   });
