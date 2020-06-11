import chai from 'chai';
var should = require("should");
var request = require("request");
var expect = chai.expect;
var urlBase = "https://github-gateway-api.herokuapp.com";


describe("Teste API to getUserDetails", function () {
    it("Must have id, login, avatar_url e created_at", function (done) {
        request.get(
            {
                url: urlBase + "/api/users/estevanpedro/details"
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
                expect(_body.should.have.property('id'));
                expect(_body.should.have.property('login'));
                expect(_body.should.have.property('avatar_url'));
                expect(_body.should.have.property('created_at'));

                done();
            }
        );
    });

});