var request = require("request");

var base_url = "http://localhost:8080/"

describe("Node Servcer Application", function() {
  describe("GET /getDataByName/lokesh", function() {
    it("returns status code 200", function() {

      request.get(base_url, function(error, response, body) {
      	if(response.body){

      	}

      });

    });
  });
});