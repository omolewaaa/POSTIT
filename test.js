process.env.NODE_ENV = 'test';
const users = require('./server/models/users');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app.js');
const should = chai.should();

chai.use(chaiHttp);

describe('status 200', () => {
      it('it should POST a  user', (done) => {
        const user = {
            username: "ooooooooo",
            email: "ak30@gmail.com",
            password: "ewa"
        }
        chai.request(app)
            .post('/api/users/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('You are registered Successfully');
              done();
            });
      });

  });