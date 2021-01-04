import chai from 'chai';
import mocha from 'mocha';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import db from '../models/index';

dotenv.config();
chai.use(chaiHttp);

const { assert } = chai;
const { suite, test } = mocha;

suite('Test Database', () => {
  test('Connection has been established successfully', () => {
    assert.isNotNull(db.sequelize);
  });
});
