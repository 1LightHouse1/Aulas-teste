const helloWorld = require('./helloWorld');

test('shoud return "Hello, World"', () => {
    const result = helloWorld();

    expect(result).toBe("Hello, World");
    
});