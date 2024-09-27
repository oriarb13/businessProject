const request = require('supertest');
const app = require('../server.js'); // Adjust this path to point to your Express app

describe('GET /data', () => {
        it('should respond with JSON data', async () => {
            const response = await request(app).get('/data');
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
    
            // expect(response.body.token).toBeDefined();
    
        });
    
        it('should respond with status code 200', async () => {
            const response = await request(app).get('/data');
            expect(response.statusCode).toBe(200);
        });    
});

describe('add', () => {
    test('return success', () => {
        expect(app.add()).toBe('success');
    });
});

describe('sum', () => {
    test('sum two positive numbers', () => {
        expect(app.sum(1,3)).toBe(4);
    });
});
describe('sum', () => {
    test('sum two positive decimal numbers', () => {
        expect(app.sum(1.5,3.3)).toBe(4.8);
    });
});
describe('sum', () => {
    test('sum positive number and negative number', () => {
        expect(app.sum(1,-3)).toBe(-2);
    });
});
describe('sum', () => {
    test('sum two letters', () => {
        expect(app.sum("f","g")).toBe("fg");
    });
});

describe('getStudentById', () => {
    test('get student by id', () => {
        expect(app.getStudentById([
            { id: 1, name: "Alice", age: 20 },
            { id: 2, name: "Bob", age: 22 },
            { id: 3, name: "Charlie", age: 19 },
          ],2)).toBe(22);
    });
});


describe('getStudentIdByAge', () => {
    test('get student id by age', () => {
        expect(app.getStudentIdByAge([
            { id: 1, name: "Alice", age: 20 },
            { id: 2, name: "Bob", age: 22 },
            { id: 3, name: "Charlie", age: 19 },
          ],22)).toBe(2);
    });
});


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

