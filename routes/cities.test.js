

// import app from '../app.js' // Link to your server file
// import supertest from 'supertest'
// const request = supertest(app)

import request from "supertest";
import app from "../app.js";
import {jest,afterAll} from "@jest/globals";
import {pool} from "../db/connection.js";

const spyQuery = jest.spyOn(pool,'query').mockImplementation(() => {
    
});

afterAll(async()=>{
    await pool.end()
})


describe("Test the root path", () => {

      describe("Test the root path", () => {
        test("It should response the GET method", async () => {
            spyQuery.mockResolvedValueOnce()
          const response = await request(app).get("/cities");
          expect(response.statusCode).toBe(200);
        });
      });

      
  });