import express from "express"
import dotenv from "dotenv"
import conectDB from "./config/db.js";

import questionsRoutes from "./routes/questionsRoutes.js";
import infoPageRoutes from "./routes/infoPageRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";
import cors from "cors"

const app = express()
app.use(express.json())

dotenv.config()
conectDB();



//  CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      //  API
      callback(null, true);
    } else {
      // Mistake
      console.log('kevin error:');
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

//routing


app.use("/api/questions", questionsRoutes)
app.use("/api/infoPage", infoPageRoutes)
app.use("/api/answer", answerRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT,() =>{
    console.log(`Servidor corriendo en: ${PORT}`);
})
