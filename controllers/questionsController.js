
import Question from "../models/Questions.js";

const createQuestions = async (req, res) => {
  try {
  req.body.forEach(async question => {
    const questionStorage = new Question(question)
    await questionStorage.save()
  });
  res.json({
    msg: "good",
  });
} catch (error) {
  console.log(error);
}



};
const getQuestions = async (req, res) => {
  let questions = await Question.find().where('description').exists()
  questions = questions.sort(()=> {return Math.random() - 0.5});
  res.json(questions);
  
};

const updateQuestion = async (req, res) => {
  const {questionNumber} = req.body;
  const question = await Question.findOne().where('questionNumber').equals(questionNumber)
  if(!question) 
    res.status(400).json({msg: "cant find"})
    else{

      question.type = req.body.type || question.type
      question.answer = req.body.answer || question.answer
      question.description = req.body.description || question.description
      question.questionNumber = req.body.questionNumber || question.questionNumber
    }
    try {
      await question.save()
      res.json({msg: "answer saved"});
  } catch (error) {
    console.log(error);
  }
};


export {
  getQuestions,
  updateQuestion,
  createQuestions

};
