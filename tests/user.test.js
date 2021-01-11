import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
import models from '../src/database/models';

const { User } = models;

chai.should();
chai.use(chaiHttp);

const { assert } = chai;

const clearUserTable = async () => {
  await User.destroy({ where: {} });
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user.id;
};

describe('POST /api/users/signup', () => {
  before(async () => {
    await clearUserTable();
  });

  const user = {
    firstName: 'Kagabo',
    lastName: 'John',
    username: 'kagabo',
    email: 'kagabo12@gmail.com',
    password: 'kagabo123',
  };
  it('It should Add a new user', (done) => {
    chai.request(app)
      .post('/api/users/signup')
      .send(user)
      .end((error, res) => {
        assert.isNull(error);
        res.should.have.status(201);
        res.should.be.a('object');
        done();
      });
  });
  it('It should not Add an existing user', (done) => {
    chai.request(app)
      .post('/api/users/signup')
      .send(user)
      .end((error, res) => {
        res.should.have.status(409);
        res.should.be.a('object');
        assert.equal(res.body.message, 'user already exists');
        done();
      });
  });

  it('It should not Add a new user with validation issues', (done) => {
    user.email = 'celestingmail.com';
    chai.request(app)
      .post('/api/users/signup')
      .send(user)
      .end((error, res) => {
        res.should.have.status(400);
        done();
      });
  });
});

describe('GET /api/users', () => {
  let id = before(async () => {
    const email = 'kagabo12@gmail.com';
    id = await getUserByEmail(email);
  });
  it('It should get all users', (done) => {
    chai.request(app)
      .get('/api/users')
      .end((error, res) => {
        assert.equal(res.status, 200);
        assert.isAbove(res.body.countUsers, 0);
        done();
      });
  });
  it('It should get user by id', (done) => {
    chai.request(app)
      .get(`/api/users/${id}`)
      .end((error, res) => {
        assert.equal(res.status, 200);
        res.body.should.have.property('user');
        done();
      });
  });
});

describe('DELETE /api/users', () => {
  let id = before(async () => {
    const email = 'kagabo12@gmail.com';
    id = await getUserByEmail(email);
  });
  it('It should delete user with userId', (done) => {
    chai.request(app)
      .delete(`/api/users/${id}`)
      .end((error, res) => {
        assert.equal(res.status, 201);
        done();
      });
  });
});
