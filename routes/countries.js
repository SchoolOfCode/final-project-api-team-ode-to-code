import express from "express";
import {getAllCountries,getCountryName, addCountry} from '../models/countries.js';
const router = express.Router();


/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });



router.get('/', async function (req, res) {
  const {name} = req.query

if (name){
  const reqName = await getCountryName(name);
  return res.json({
    message:'ok',
    payload:reqName
  })
}

  const allCountries = await getAllCountries();
   res.json({ 
    message:'ok',
    payload:allCountries 
});
});

router.post('/', async function (req, res) {
  const newCountry = req.body;
  const result = await addCountry(newCountry);
  return res.json({
    message: 'ok',
    payload: result,
  });
});


export default router;
