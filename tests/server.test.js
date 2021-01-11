import chai from 'chai';
import mocha from 'mocha';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);

const { assert } = chai;
const { suite, test } = mocha;

suite('Test server', () => {
  test('App should be defined', () => {
    assert.isDefined(app, 'App is not defined');
  });
});

suite('Test welcome end point GET /', () => {
  test('Test GET / welcome endpoint', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  test('Test GET /not-available with invalid request', (done) => {
    chai.request(app)
      .get('/not-available')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      });
  });
});
