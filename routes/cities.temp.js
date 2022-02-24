import supertest from "supertest";
import app from "../app.js";
import {jest, afterAll} from "@jest/globals";
import {pool} from "../db/connection.js";

const request = supertest(app)

const spyQuery = jest.spyOn(pool,'query').mockImplementation(() => {
  { 
    rows: [
      { 
    id: 1,
    city_name: "Paris",
    country: "France",
    continent: "Europe",
    rating: 5,
    image: "link",
    city_description: "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. The area is 105 square kilometres (41 square miles), and around 2.15 million people live there. The Seine river runs through the oldest part of Paris, and divides it into two parts, known as the Left Bank and the Right Bank. It is surrounded by many forests. Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro). It also has two airports. The Metro was built in 1900, and its total length is more than 200 km (120 mi). The city has a multi-cultural style, because 19% of the people there are from outside France.[3] There are many different restaurants with all kinds of food.",
    city_attractions: ["The Eiffel Tower", "The Louvre Museum", "Notre Dame Cathedral", "Sainte-Chapelle", "River Seine", "Les Catacombes"],
    great_for: ["families", "solo", "city break", "romance", "shopping"],
    tags: ["paris", "france", "eiffel tower", "city", "europe"],
    budget: "££",
    holiday_type:"city break"},]
}});

afterAll(async()=>{
    await pool.end()
})


describe("Test the /cities route", () => {

      describe("Test the /cities route", () => {
        test("It should response the GET method", async () => {
            spyQuery.mockResolvedValueOnce()
          const response = await request.get("/cities");
          expect(response.payload[0]).toContain("city_name")
        });
      });

      
  });