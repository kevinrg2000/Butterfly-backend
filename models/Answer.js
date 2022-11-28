import mongoose from "mongoose";



const AnswerSchema = mongoose.Schema(
    {
      questionNumber: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      answerString: {
        type: String,
        trim: true,
      },
      answerNumber: {
        type: Number,
        trim: true,
      },      
    },
  );

const Question = mongoose.model("Answer", AnswerSchema);
export default Question;
