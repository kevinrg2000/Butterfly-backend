import mongoose from "mongoose";



const infoPageSchema = mongoose.Schema(
    {
      number: {
        type: Number,
      },
      description: {
        type: String,
      },
    },
  );

const InfoPage = mongoose.model("InfoPage", infoPageSchema);
export default InfoPage;
