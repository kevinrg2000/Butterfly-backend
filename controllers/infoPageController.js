
import InfoPage from "../models/infoPage.js";




const createInfoPage = async (req, res) => {
  try {
  req.body.forEach(async infoPage => {
    
    const infoPageStorage = new InfoPage(infoPage)
    await infoPageStorage.save()
  });
  res.json({
    msg: "good",
  });
} catch (error) {
  console.log(error);
}
};
const getInfoPage = async (req, res) => {
  const infoPages = await InfoPage.find().where('description').exists()
  res.json(infoPages);
};


export {
  
  getInfoPage,
  createInfoPage
  
};
