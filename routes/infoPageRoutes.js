import express from "express";
import {getInfoPage, createInfoPage} from "../controllers/infoPageController.js";


const router = express.Router();
router
  .route("/")
  .get( getInfoPage) // get all infoPage
  .post( createInfoPage) // create questions

export default router;
