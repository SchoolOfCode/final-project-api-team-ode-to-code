import express from "express";
import {getAllCountries,getCountryName, addCountry, updateCountry, patchCountry} from '../models/countries.js';
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



// all of country data needs to be included in body in format below for PUT request

// {
//   country: "",
//   continent: "",
//   image: "",
//   country_description: "",
//   cities: [""],
// },

router.put('/', async function (req, res) {
  const { name } = req.query
  const body = req.body;
  const result = await updateCountry(body, name);
  return res.json({
    message: 'ok',
    payload: result,
  });
});


// PATCH request needs body formatted like this:

// {"data":""}

// also change the column in models to specify which column to update

router.patch('/', async function (req, res) {
  const { name } = req.query
  const body = req.body.data;
  const result = await patchCountry(body, name);
  return res.json({
    message: 'ok',
    payload: result,
  });
});



export default router;
