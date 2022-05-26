/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
// const supertest = require('supertest')(require('../../src/routes/index'))
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);

describe('Rutas para perros', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  it('GET para buscar un perro mediante el nombre pasandole un nombre', function () {
    return agent
      .get('/dogs/breed?name=puggle')
      .expect(200)
      .expect(function (res) {
        expect(res.body).to.eql([
          {
            id: 203,
            "name": "Puggle",
            "temperament": "Affectionate, Willful, Sweet-Tempered, Keen, Sociable, Spirited, Lively, Loyal, Playful, Determined, Gentle, Intelligent, Happy, Loving, Watchful, Brave, Hunting Instinct",
            "height": {
              "imperial": "8 - 15",
              "metric": "20 - 38"
            },
            "weight": {
              "imperial": "15 - 30",
              "metric": "7 - 14"
            },
            "life_span": "12 - 14 years"
          }
        ])
      })
  })
  it("GET para buscar un perro mediante el nombre sin pasarle el nombre", function () {
    return agent
      .get("/dogs/breed?name=asd")
      .expect(200)
      .expect(function (res) {
        console.log(res.body)
        expect(res.body).to.eql({})
      })
  })
});
