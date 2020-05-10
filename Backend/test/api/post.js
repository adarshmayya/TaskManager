const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../routes/task');
const conn = require('../../app');

describe('POST /task', () => {
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

  it('OK, creating a new task works', (done) => {
    request(app).post('/api/task')
      .send({ description: 'NOTE', finished: false })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('description');
        expect(body).to.contain.property('finished');
        done();
      })
      .catch((err) => done(err));
  });

  it('Fail, task requires text', (done) => {
    request(app).post('/api/task')
      .send({ description: 'NOTEaa' })
      .then((res) => {
        const body = res.body;
        expect(body.errors.text.name)
          .to.equal('ValidatorError')
        done();
      })
      .catch((err) => done(err));
  });
})