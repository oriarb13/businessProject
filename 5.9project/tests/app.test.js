// describe('GET /data', () => {
//     it('should respond with JSON data', async () => {
//         const response = await request(app).get('/data');
//         expect(response.statusCode).toBe(200);
//         expect(response.body).toBeDefined();
//     });

//     it('should respond with status code 200', async () => {
//         const response = await request(app).get('/data');
//         expect(response.statusCode).toBe(200);
//     });
// });


// // describe('POST /data', () => {
// //     it('should respond with a successful message', async () => {
// //         const mockData = { key: 'value' };
// //         const response = await request(app)
// //             .post('/data')
// //             .send(mockData);
// //         expect(response.statusCode).toBe(200);
// //         expect(response.body.message).toBe('Data successfully sent via Axios, and Selenium task completed');
//     });
// });


const request = require("supertest");
//const express = require('express');//not in use
const app = require("../server.js"); // Adjust this path to point to your Express app
//integration test
describe("GET /VPD/:add and /ANP", () => {
  it("/VPD/:add should respond with status code 200", async () => {
    const response = await request(app).get("/task0");
    expect(response.statusCode).toBe(200);
  });
  it("GET /ANP should respond with status code 200", async () => {
    const response = await request(app).get("/task1/3");
    expect(response.statusCode).toBe(200);
  });
  it("GET /ANP should respond with status code 200", async () => {
    const response = await request(app).get("/allcarts");
    expect(response.statusCode).toBe(200);
  });
  it("GET /ANP should respond with status code 200", async () => {
    const response = await request(app).get("/carts/3/update");
    expect(response.statusCode).toBe(200);
  });
  it("GET /ANP should respond with status code 200", async () => {
    const response = await request(app).get("/products/update?title=nnn&price=1&description=jjj?image=mmmm?category=hhh");
    expect(response.statusCode).toBe(200);
  });
});
