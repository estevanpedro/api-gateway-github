// import chai from 'chai';
var should = require("should");
var chai = require("chai");
var request = require("request");
var expect = chai.expect;
var urlBase = "https://github-gateway-api.herokuapp.com";


describe("Teste API to getUserDetails", function () {
    it("Deve receber 100 cartas", function (done) {
        request.get(
            {
                url: urlBase + "/cards"
            },
            // @ts-ignore
            function (error, response, body) {

                var _body = {};
                try {
                    _body = JSON.parse(body);
                }
                catch (e) {
                    _body = {};
                }
                expect(response.statusCode).to.equal(200);
                // @ts-ignore
                if (_body.should.have.property('login')) {
                    //se retornou, vamos verificar o tamanho, deve ser menor ou igual a 100 itens 
                    // @ts-ignore
                    expect(_body.login).to.have.lengthOf.at.most(100);
                }

                done(); // avisamos o test runner que acabamos a validacao e ja pode proseeguir
            }
        );
    });

});