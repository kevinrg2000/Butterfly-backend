import Answer from "../models/Answer.js";

const createAnswer = async (req, res) => {
  try {
    Object.values(req.body).forEach(async (answer) => {
      const answerStorage = new Answer(answer);
      await answerStorage.save();
    });
    res.json({
      msg: "good",
    });
  } catch (error) {
    console.log(error);
  }
};

export { createAnswer };
