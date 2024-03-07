const dividir = require('./matematica');

test('lança uma exceção ao dividir por zero', () =>{
    expect(() => dividir(5,0).toThrow("Divisão por zero não é permitida"));
});