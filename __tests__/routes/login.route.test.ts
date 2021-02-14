import supertest from 'supertest';
import { app } from '../../src/index';
import {expect} from 'chai'

const wrongBody = {
  "username": "wronguser",
  "password": "wronguser",
}

const correctBody={  

"username": "admin",
"password": "admin",
}

const server = supertest(app);


describe('Index page test', () => {
  it('sgould get status 200 with correct request', async () => {
    return Promise.resolve()
      .then(() => {
        return server
          .post('/login').send(correctBody)
          .expect(200);
      });
  });

  it('should throw error 401 without correc user information', async () => {
    return Promise.resolve()
      .then(() => {
        return server
          .post('/login')
          .send(wrongBody)
          .expect(401);
      });
  })

  it('should return an accessToken', done => {
    server
      .post(`/login`)
      .send(correctBody) // x-www-form-urlencoded upload
      .end((err, res) => {
        expect(res.body).to.include.all.keys('accessToken','role')
        done();
      });
  });

  it('should not include sensitive information in body', done => {
    server
      .post(`/login`)
      .send(correctBody) // x-www-form-urlencoded upload
      .end((err, res) => {
        expect(res.body).to.not.include.all.keys('password')
        done();
      });
  });
  it('should throw error 422 without correct request body', async () => {
    return Promise.resolve()
      .then(() => {
        return server
          .post('/login')
          .expect(422);
      });

  })

})