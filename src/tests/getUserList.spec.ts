import chai from 'chai';
var should = require("should");
var request = require("request");
var expect = chai.expect;
var urlBase = "https://github-gateway-api.herokuapp.com";


describe("Teste API to getUserList", function () {
    it("Must return Status code 200", function (done) {
        request.get(
            {
                url: urlBase + "/api/users?since=130"
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
                done();
            }
        );
    });

});