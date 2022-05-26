const { Race, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Test para el modelo de raza', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validadores', () => {
    beforeEach(() => Race.sync({ force: true }));
    describe('name', () => {
      it('Si no le pasamos nada no deberia funcionar', (done) => {
        Race.create({name:"juanpa"})
          .then(() => done(new Error('Requiere todos los datos')))
          .catch(() => done());
      })
      it('Si no le pasamos nada no deberia funcionar', async (done) => {
        Race.create({name:"juanpa"})
        expect(await Race.findAll({where:{name:"Pug"}})).to.eql('Wanda, ahora tienes el plan regular')
        done()
      })
    });
  });
});
