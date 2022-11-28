import express from "express";
import { createAnswer} from "../controllers/answerController.js";


const router = express.Router();
router
  .route("/")
  .post( createAnswer) // create answer

export default router;
