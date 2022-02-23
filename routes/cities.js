import express from 'express';
const router = express.Router();
import {getAllCities, getCityName} from '../models/cities.js'

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.json({ message: 'I wish we had some information to give you ☹️' });
// });

router.get('/', async function (req, res) {
const {name} = req.query

if (name){
  const reqName = await getCityName(name);
  return res.json({
    message:'ok',
    payload:reqName
  })
}
  const allCities = await getAllCities();
  console.log(allCities)
   res.json({ 
    message:'ok',
    payload:allCities 
});
});




export default router;
