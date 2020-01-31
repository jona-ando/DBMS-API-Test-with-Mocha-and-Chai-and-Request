const request = require("request");
const assert = require("chai").assert;
const baseURL = "https://abayh.com/api";


describe("Abayh DBMS API", () => {

  describe("Response Headers", () => {
    it("content-type shoud return application/json; charset=utf-8", done => {
      request.get({ url: baseURL + "/products" }, (error, response, body) => {
        assert.equal(
          response.headers["content-type"],
          "application/json; charset=utf-8"
        );
        done();
      });
    });
  });

  describe("Status_Codes & Messages", () => {
    it("StatusCode shoud return 200 for /products", done => {
      request.get({ url: baseURL + "/products" }, (error, response, body) => {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    it("StatusCode shoud return 200 for correct /byid/:id", done => {
      request.get({ url: baseURL + "/byid/4" }, (error, response, body) => {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    it("StatusCode shoud return 200 for correct /byname/:name", done => {
      request.get(
        { url: baseURL + "/byname/Monitor" },
        (error, response, body) => {
          assert.equal(response.statusCode, 200);
          done();
        }
      );
    });

    it("StatusCode shoud return 200 for correct /bymodelNumber/:modelNumber", done => {
      request.get(
        { url: baseURL + "/bymodelNumber/125A48EFG" },
        (error, response, body) => {
          assert.equal(response.statusCode, 200);
          done();
        }
      );
    });

    it("StatusCode shoud return 200 for correct /bybrand/:brandName", done => {
      request.get(
        { url: baseURL + "/bybrand/asus" },
        (error, response, body) => {
          assert.equal(response.statusCode, 200);
          done();
        }
      );
    });
  });


  describe("Bad Requests Status_Codes & Messages", () => {
    it("Bad Request: StatusCode should return 404 for an endpoint which does not exits (/thisendpointdoesnotexist)", done => {
      request.get(
        { url: baseURL + "/thisendpointdoesnotexist" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for an endpoint which does not exits (/products/product/thisendpointdoesnotexist)", done => {
      request.get(
        { url: baseURL + "/products/product/thisendpointdoesnotexist" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for an endpoint which does not exits (/byname/name/thisendpointdoesnotexist)", done => {
      request.get(
        { url: baseURL + "/byname/name/thisendpointdoesnotexist" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for an endpoint which does not exits (/bybrand/brand/thisendpointdoesnotexist)", done => {
      request.get(
        { url: baseURL + "/bybrand/brand/thisendpointdoesnotexist" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for an endpoint which does not exits (/bymodelnumber/model/thisendpointdoesnotexist)", done => {
      request.get(
        { url: baseURL + "/bymodelnumber/model/thisendpointdoesnotexist" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for product id which does not exits (/products/999989)", done => {
      request.get(
        { url: baseURL + "/products/9999" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for product name which does not exits (/byname/nosuchname)", done => {
      request.get(
        { url: baseURL + "/byname/nosuchname" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for product model number which does not exits (/bymodelNumber/nosuchmodelnumber)", done => {
      request.get(
        { url: baseURL + "/bymodelNumber/nosuchmodelnumber" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });

    it("Bad Request: StatusCode should return 404 for product brand name which does not exits (/bybrand/nosuchbrand)", done => {
      request.get(
        { url: baseURL + "/bybrand/nosuchbrand" },
        (error, response, body) => {
          assert.equal(response.statusCode, 404);
          done();
        }
      );
    });
  });


  describe("Return_Data_Types", () => {
    var error = null;
    var response = null;
    var body = null;
    var obj = null;

    request.get({ url: baseURL + "/products" }, (err, res, bod) => {
      error = err;
      response = res;
      body = bod;
      obj = JSON.parse(body);
    });

    it("ID data type should be number", done => {
      for (var o of obj) {
        assert.typeOf(o.id, "number");
      }
      done();
    });

    it("Name data type should be string", done => {
      for (var o of obj) {
        assert.typeOf(o.name, "string");
      }
      done();
    });

    it("Price data type should be number", done => {
      for (var o of obj) {
        assert.typeOf(o.price, "number");
      }
      done();
    });
    

    it("Quantity data type should be number", done => {
      for (var o of obj) {
        assert.typeOf(o.quantity, "number");
      }
      done();
    });

    it("Model Number data type should be string", done => {
      for (var o of obj) {
        assert.typeOf(o.modelNumber, "string");
      }
      done();
    });

    it("Department data type should be string", done => {
      for (var o of obj) {
        assert.typeOf(o.department, "string");
      }
      done();
    });

    it("Category data type should be string", done => {
      for (var o of obj) {
        assert.typeOf(o.category, "string");
      }
      done();
    });

    it("Brand data type should be string", done => {
      for (var o of obj) {
        assert.typeOf(o.department, "string");
      }
      done();
    });
  });


  let pname = "Apple Iphone " + Math.floor(Math.random() * 499) + 101 + "s";
  // console.log("Created: ", pname);

  describe("Post Operations", () => {
    it("Shoud post a new product to the db", done => {
      request.post({
        url: baseURL + "/products", form: {
          "name": pname,
          "price": 999,
          "quantity": 1000,
          "modelNumber": "125AEF20S",
          "departmentID": 4,
          "categoryID": 19,
          "brandID": 5
        }
      },
        (error, response, body) => {
          assert.equal(response.statusCode, 200);
          done();
        });
    });
  });


  let updatedName = "Apple Iphone " + Math.floor(Math.random() * 999) + 500 + "U";
  // console.log("Updated: ", updatedName);

  describe("Put Operations", () => {
    it("Shoud update a product with given name in the db", done => {
      request.put({
        url: baseURL + `/byname/${pname}`, form: {
          "name": updatedName,
          "price": 999,
          "quantity": 1000,
          "modelNumber": "125AEF20S",
          "departmentID": 4,
          "categoryID": 19,
          "brandID": 5
        }
      },
        (error, response, body) => {
          assert.equal(response.statusCode, 200);
          done();
        });
    });
  });


  // console.log("Deleted: ", updatedName);
  describe("Delete Operations", () => {
    it("Shoud delete the product with given name", done => {
      request.delete({ url: baseURL + `/byname/${updatedName}` }, (error, response, body) => {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });


});
