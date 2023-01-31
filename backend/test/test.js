const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const server = require('../server');

describe('user testing', () => {

    describe('Test Login', () => {

        let logingData = {

            username: 'user',
            password: '123'
          };         

        it('/user/login - POST', done => {

            request(server.app)
              .post('/user/login')
              .send(logingData)
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 

    });


    describe('Test get', () => {   

        it('/user/getAll - GET', done => {


            request(server.app)
              .get('/user/getAll')
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 

    });

});

describe('Service Test', () => {

    describe('/Service', () => {

        let ap = {

            username: 'Sophia',
            phone: '0786567899',
            service: 'Hair Treatment',
            date: '03rd of Feb 2023',
            persons: '04',
          };

        it('/Service - POST', (done) => {

          request(server.app)
            .post('/service/create')
            .send(ap)
            .expect(200)
            .end(done);
        });
      });


});

describe('Test Feedback', () => {

    describe('Feedback', () => {     

        it('/feedback - GET', done => {

            request(server.app)
              .get('/feedback/getAll')
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 
          
    });

});
