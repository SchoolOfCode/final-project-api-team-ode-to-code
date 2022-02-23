import query from '../db/connection.js';

test("Has the structure { message:'ok', payload: an array of objects", async function () {
  async function getAllCities() {
    const result = await query(`SELECT * FROM cities;`);
    return result.rows;
  }

  const actual = await getAllCities();

  const expected = {
    message: 'ok',
    payload: [
      {
        id: expect.any(Number),
        city_name: expect.any(Object),
        continent: expect.any(Text),
        rating: expect.any(Number),
        image: expect.any(Text),
        city_description: expect.any(Text),
        city_attractions: expect.any(Object),
        great_for: expect.any(Object),
        tags: expect.any(Object),
      },
      {
        id: expect.any(Number),
        city_name: expect.any(Object),
        continent: expect.any(Text),
        rating: expect.any(Number),
        image: expect.any(Text),
        city_description: expect.any(Text),
        city_attractions: expect.any(Object),
        great_for: expect.any(Object),
        tags: expect.any(Object),
      },
    ],
  };

  expect(actual).toEqual(expected);
});
