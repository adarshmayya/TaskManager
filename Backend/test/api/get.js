
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../routes/task');
const conn = require('../../app');


describe('GET /api/task', () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, gettingtasks ', (done) => {
    request(app).get('/api/task')
      .then((res) => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });
})