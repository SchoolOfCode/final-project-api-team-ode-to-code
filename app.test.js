import request from 'supertest';
import app from './app.js';
import {getCityName} from './models/cities.js';
import {getAllCountries, getCountryName} from './models/countries.js';
import {beforeEach, afterAll} from "@jest/globals";
import {pool} from "./db/connection.js";


beforeEach(expect.hasAssertions)

afterAll(async()=>{
  await pool.end()
})


describe("check /cities route", () => {

    test("GET request should respond with a 200 status code", async () => {
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200)
    })

    test("GET request should respond with first city_name in the body", async () => {
        const response = await request(app).get("/cities") 
        expect(response.body.payload[0].budget).toBe('££')
      })

      test("GET request should respond with function defined", async () => {
        const response = await request(app).get("/cities")
        expect(getCityName).toBeDefined()
      })

      test("GET request should respond with a GET status", async () => {
        const response = await request(app).get("/cities")
        expect(response.req.method).toBe('GET')
      })

      test("GET request to have a header in the response", async () => {
        const response = await request(app).get("/cities")
        expect(response.header).toStrictEqual(expect.any(Object))
      })


})



///////

describe("check /countries route", () => {

    test("GET request should respond with a 200 status code", async () => {
      const response = await request(app).get("/countries")
      expect(response.statusCode).toBe(200)
    })

    test("GET request should not respond with a 400 status code", async () => {
        const response = await request(app).get("/countries")
        expect(response.status).not.toBe(400)
      })


      test("GET request should show the function defined", async () => {
        const response = await request(app).get("/countries")
        expect(getAllCountries).toBeDefined()
      })


      test('GET request should return something from the function', async () => {
        const response = await request(app).get("/countries")
        expect(getCountryName).toBeTruthy();
      });



})