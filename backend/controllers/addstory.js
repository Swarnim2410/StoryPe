import uploadOnCloudinary from "../utils/cloudinary.js";
import storyModel from "../models/story.model.js";
export const addStory = async (req, res) => {
  // console.log("hello");
  try {
    if (!req.file) {
      return res.status(400).send({ message: "Image file not provided" });
    }

    const { title, image, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .send({ message: "Please provide all the details" });
    }
    // Upload image to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    if (!cloudinaryResponse || !cloudinaryResponse.url) {
      // console.log("hello");
      return res.status(500).send({ message: "Error uploading to Cloudinary" });
    }

    // Create new product object
    const newStory = new storyModel({
      title: req.body.title,
      image: cloudinaryResponse.url,
      description: req.body.description,
    });

    // console.log(newStory);
    await newStory.save();

    res.send({ message: "Story added successfully", redirect: true });
  } catch (error) {
    console.error("Error in addingStory", error);
    res.status(500).send({ message: "Internal Server Error", redirect: false });
  }
};
