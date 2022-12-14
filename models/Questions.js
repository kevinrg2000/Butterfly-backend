import mongoose from "mongoose";



const questionSchema = mongoose.Schema(
    {
      questionNumber: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
      },
      answer: {
        type: Number,
        trim: true,
      },
      
    },
  );

const Question = mongoose.model("Question", questionSchema);
export default Question;
