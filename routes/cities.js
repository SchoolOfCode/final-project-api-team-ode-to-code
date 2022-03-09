import express from 'express';
import {
  getAllCities,
  getCityName,
  addCity,
  updateCity,
  patchCity,
  deleteCityByName,
} from '../models/cities.js';

const router = express.Router();
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
  res.json({
    message: 'ok',
    payload: allCities,
  });
});


// all of city data needs to be included in body in JSON format below for PUT or POST request

// {"city_name":"","country":"","continent":"","rating": ,"image": "","image2": "","city_description":"","city_attractions":[],"great_for": [],"tags": [],"budget": "","holiday_type":""}

router.post('/', async function (req, res) {
  const newCity = req.body;
  const result = await addCity(newCity);
  return res.json({
    message: 'ok',
    payload: result,
  });
});

router.put('/', async function (req, res) {
  const { name } = req.query;
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
  const { name } = req.query;
  const body = req.body;
  const result = await patchCity(body, name);
  return res.json({
    message: 'ok',
    payload: result,
  });
});

router.delete('/', async function (req, res) {
  const { name } = req.query;
  let result = await deleteCityByName(name);
  res.json({
    success: true,
    payload: result,
  });
});

export default router;
