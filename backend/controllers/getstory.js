import storyModel from "../models/story.model.js";
export const getStory = async (req, res) => {
  const data = await storyModel.find({});
  res.send(JSON.stringify(data));
};
