const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions');

test('Should return 2', () => expect(returnTwo()).toEqual(2))

test('Greeting should return "Hello yournamehere"', () => expect(greeting('Tom')).toEqual('Hello, Tom.'))


describe('math functions test', () => {

    test('Add should return the sum of two numbers', () => expect(add(8,2)).toEqual(10))
    
    test('Add should return the subtraction of two numbers', () => expect(subtract(8,2)).toEqual(6))
    
    test('Add should return the multiplication of two numbers', () => expect(multiply(8,2)).toEqual(16))
    
    test('Add should return the division of two numbers', () => expect(divide(8,2)).toEqual(4))
    
})