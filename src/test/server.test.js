const app = require('../server/index')
const request = require("supertest");
var httpMocks = require('node-mocks-http');

describe("GET / ", () => {
    test("It should respond with dist/index.html file & Status Code: 200", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
});

describe('POST /article' , () => {
    test('Valid URL, should respond with response from Aylien API call', () => {
        const next = jest.fn();
        const req = httpMocks.createRequest({
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                text: "https://www.foxnews.com/media/elon-musk-cnn-ventilators" 
            })
        });
        const res = httpMocks.createResponse();
        expect(res.statusCode).toBe(200);
    });
});