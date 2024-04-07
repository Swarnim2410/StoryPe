import mongoose from "mongoose";
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting in MongoDB", error.message);
  }
};
export default connectToMongo;
