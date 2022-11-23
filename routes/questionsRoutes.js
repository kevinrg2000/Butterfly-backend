import express from "express";
const router = express.Router();

 import {getQuestions, updateQuestion,createQuestions }   from "../controllers/questionsController.js";



router
  .route("/")
  .get( getQuestions) //get all questions 
  .put( updateQuestion) // update questions
  .post( createQuestions) // create questions

export default router;
