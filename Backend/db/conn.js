const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const mongoURI = process.env.DATABASE;

if (!mongoURI) {
  throw new Error("MongoDB connection URI is not defined in .env file");
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
 
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err.message);
});
