process.env.NODE_ENV = 'test';

let Issue = require('../models/issueModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Issue', () => {
    /* beforeEach((done) => {
         //Before each test we empty the database in your case
         done();
     });*/
    /*
     * Test the /GET route
     */
    describe('/GET issue', () => {
        it('it should GET all the issue', (done) => {
            chai.request(server)
                .get('/api/v0/issue')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    /*
     * Test the /POST route
     */
    /*describe('/POST issue', () => {
        it('it should not POST an issue without description field', (done) => {
            let issue = {
                title: "Test Issue",
                category: "Test Category",
                submitterName: "Rohan",
                statusId: 1
            }
            chai.request(server)
                .post('api/v0/issue')
                .send(issue)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('pages');
                    done();
                });
        });
    });*/
});