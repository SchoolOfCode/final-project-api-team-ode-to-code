import express from 'express';
const router = express.Router();
import { getAllCities, getCityName, addCity, updateCity, patchCity} from '../models/cities.js';

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.json({ message: 'I wish we had some information to give you ☹️' });
// });

router.get('/', async function (req, res) {
  const { name } = req.query;

  if (name) {
    const reqName = await getCityName(name);
    return res.json({
      message: 'ok',
      payload: reqName,
    });
  }
  const allCities = await getAllCities();
  console.log(allCities);
  res.json({
    message: 'ok',
    payload: allCities,
  });
});

router.post('/', async function (req, res) {
  const newCity = req.body;
  const result = await addCity(newCity);
  return res.json({
    message: 'ok',
    payload: result,
  });
});


// all of city data needs to be included in body in format below for PUT request

// { city_name: "",
//   country: "",
//   continent: "",
//   rating: ,
//   image: "",
//   city_description: "", 
//   city_attractions: [""],
//   great_for: [""],
//   tags: [""],
// },

router.put('/', async function (req, res) {
  const { name } = req.query
  const body = req.body;
  const result = await updateCity(body, name);
  return res.json({
    message: 'ok',
    payload: result,
  });
});

// PATCH request needs body formatted like this:

// {"column":"","data":""}

router.patch('/', async function (req, res) {
  const { name } = req.query
  const body = req.body;
  const result = await patchCity(body, name);
  return res.json({
    message: 'ok',
    payload: result,
  });
});


export default router;
