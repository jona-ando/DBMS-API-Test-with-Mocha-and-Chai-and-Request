var request = require("request");
var assert = require("chai").assert;
var baseURL = "https://abayh.com/api";


describe('Abayh DBMS API', () => {

    describe("Response Headers", () => {

        it('===> content-type should return application/json; charset=utf-8', (done) => {
            request.get({ url: baseURL + '/products' },
                (error, response, body) => {
                    assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
                    done();
                });
        });
    });

    describe("Status_Codes & Messages", () => {

        it('StatusCode should return 200 for /products', (done) => {

            request.get({ url: baseURL + '/products' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 200);
                    done();
                });
        });

        it('StatusCode should return 200 for /products/:id', (done) => {

            request.get({ url: baseURL + '/products/7' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 200);
                    done();
                });
        });

        it('StatusCode should return 200 for /products/name/:name', (done) => {

            request.get({ url: baseURL + '/products/name/iphonex' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 200);
                    done();
                });
        });


        it('StatusCode should return 200 for /products/modelNumber/:modelNumber', (done) => {

            request.get({ url: baseURL + '/products/modelNumber/125A48EFX' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 200);
                    done();
                });
        });

        it('StatusCode should return 200 for /products/brand/:brandName', (done) => {

            request.get({ url: baseURL + '/products/brand/apple' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 200);
                    done();
                });
        });


        it('Bad Request: StatusCode should return 404 for product id which is not found', (done) => {
            request.get({ url: baseURL + '/products/999' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 404);
                    done();
                });
        });

        it('Bad Request: StatusCode should return 404 for product name which is not found', (done) => {
            request.get({ url: baseURL + '/products/name/nosuchname' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 404);
                    done();
                });
        });


        it('Bad Request: StatusCode should return 404 for product model number which is not found', (done) => {
            request.get({ url: baseURL + '/products/modelNumber/nosuchmodelnumber' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 404);
                    done();
                });
        });

        it('Bad Request: StatusCode should return 404 for product brand name which is not found', (done) => {
            request.get({ url: baseURL + '/products/brand/nosuchbrand' },
                (error, response, body) => {
                    assert.equal(response.statusCode, 404);
                    done();
                });
        });

    });


    describe("Return_Data_Types", () => {

        var error = null;
        var response = null;
        var body = null;
        var obj = null;

        request.get({ url: baseURL + '/products' },
            (err, res, bod) => {
                error = err;
                response = res;
                body = bod;
                obj = JSON.parse(body);
            });

        it('ID data type should be number', (done) => {
            for (var o of obj) {
                assert.typeOf(o.id, 'number');
            }
            done();
        });

        it('Name data type should be string', (done) => {
            for (var o of obj) {
                assert.typeOf(o.name, 'string');
            }
            done();
        });


        it('Price data type should be number', (done) => {
            for (var o of obj) {
                assert.typeOf(o.price, 'number');
            }
            done();
        });


        it('Quantity data type should be number', (done) => {
            for (var o of obj) {
                assert.typeOf(o.quantity, 'number');
            }
            done();
        });

        it('Model Number data type should be string', (done) => {
            for (var o of obj) {
                assert.typeOf(o.modelNumber, 'string');
            }
            done();
        });

        it('Department ID data type should be number', (done) => {
            for (var o of obj) {
                assert.typeOf(o.departmentID, 'number');
            }
            done();
        });

        it('Category ID data type should be number', (done) => {
            for (var o of obj) {
                assert.typeOf(o.categoryID, 'number');
            }
            done();
        });


        it('Brand ID data type should be number', (done) => {
            for (var o of obj) {
                assert.typeOf(o.departmentID, 'number');
            }
            done();
        });

    });


});