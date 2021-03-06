/* global chai, _ */

var expect = chai.expect;

var MongoPortable = null,
    Logger = null;

describe("MongoPortable - Web", function() {
    it("should have the dependencies ready", function() {
        expect(require).to.exist;
        expect(_).to.exist;
        
        MongoPortable = require("mongo-portable");
        Logger = require("jsw-logger");
        
        expect(MongoPortable).to.exist;
        expect(Logger).to.exist;
    });
});