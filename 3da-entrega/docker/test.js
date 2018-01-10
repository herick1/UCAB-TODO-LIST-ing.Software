process.env.NODE_ENV = 'test';

var expect  = require('chai').expect;
var request = require('request');
var chaiHttp = require('chai-http');
var chai = require('chai');
//var app = require('../app');
var url="http://localhost:3001";
chai.use(chaiHttp);

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(){
            request('http://localhost:3001', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('content', function() {
          request('http://localhost:3001' , function(error, response, body) {
            expect(body).to.equal('Hello World');
            });
        });
    });
});

describe ('About page', function() {
        it('status', function(){
            request('http://localhost:3001/v1/todos', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
            });
        });
    });
/*
describe('GET /v1/todos',()=>{
	  it('should get all todos', (done) => {
	    chai.request(app)
	      .get('/v1/todos')
	      .end( function(err,res){
	        console.log(res.body)
	        expect(res).to.have.status(200);
	        done();
	      });
	  });
	});

describe('POST /v1/todos',()=>{
	  it('should receive an error because we send the list in form format', (done) => {
	    chai.request(app)
	      .post('/v1/todos')
	      .type('form')
	      .send({nombre:"prueba", descripcion:"pruebaa", lista:null, completada:false, fecha:"1-1-1 0:0:0"})
	      .end( function(err,res){
	        console.log(res.body)
	        expect(res).to.have.status(200);
	        done();
	      });
	  });
	});*/

/*
  describe('update the days of country with id 1: ',()=>{
  	  it('should update the number of days', (done) => {
  	    chai.request(url)
  	      .put('/country/1/days/20')
  	      .end( function(err,res){
  	        console.log(res.body)
  	        expect(res.body).to.have.property('days').to.be.equal(20);
  	        expect(res).to.have.status(200);
  	        done();
  	      });
  	  });
  	});



  describe('delete the country with id 1: ',()=>{
	  it('should delete the country with id 1', (done) => {
	    chai.request(url)
	      .get('/countries')
	      .end( function(err,res){
	        console.log(res.body)
	        expect(res.body).to.have.lengthOf(2);
	        expect(res).to.have.status(200);
	        chai.request(url)
	          .del('/country/1')
	          .end( function(err,res){
	            console.log(res.body)
	            expect(res).to.have.status(200);
	            chai.request(url)
	              .get('/countries')
	              .end( function(err,res){
	                console.log(res.body)
	                expect(res.body).to.have.lengthOf(1);
	                expect(res.body[0]).to.have.property('id').to.be.equal(0);
	                expect(res).to.have.status(200);
	                done();
	            });
	          });
	      });
	  });
	});

});*/
