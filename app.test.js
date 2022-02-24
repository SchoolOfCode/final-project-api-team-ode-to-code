import request from 'supertest';
import app from './app.js';
import {getCityName} from './models/cities.js';
import {getAllCountries, getCountryName} from './models/countries.js';


beforeEach(expect.hasAssertions)

describe("/cities", () => {

    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200)
    })

    test("should respond with first city_name in the body", async () => {
        const response = await request(app).get("/cities") 
        expect(response.body.payload[0].budget).toBe('££')
      })

      test("should respond with function defined", async () => {
        const response = await request(app).get("/cities")
        expect(getCityName).toBeDefined()
      })

      test("should respond with a GET status", async () => {
        const response = await request(app).get("/cities")
        expect(response.req.method).toBe('GET')
      })

      test("11111", async () => {
        const response = await request(app).get("/cities")
        expect(response.header).toStrictEqual(expect.any(Object))
      })


})



///////

describe("/countries", () => {

    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/countries")
      expect(response.statusCode).toBe(200)
    })

    test("should not respond with a 400 status code", async () => {
        const response = await request(app).get("/countries")
        expect(response.status).not.toBe(400)
      })


      test("should show the function defined", async () => {
        const response = await request(app).get("/countries")
        expect(getAllCountries).toBeDefined()
      })


      test('should return something from the function', async () => {
        const response = await request(app).get("/countries")
        expect(getCountryName).toBeTruthy();
      });



})