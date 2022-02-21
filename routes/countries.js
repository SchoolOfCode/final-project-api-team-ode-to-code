import express from "express";
import {getAllCountries} from '../models/countries.js';
const router = express.Router();


/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });



router.get('/', async function (req, res) {

  const allCountries = await getAllCountries();
  console.log(allCountries)
   res.json({ 
    message:'ok',
    payload:allCountries 
});
});
export default router;
