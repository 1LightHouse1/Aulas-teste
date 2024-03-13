const email = require('./verificaValidadeEmail');

test('lança uma exceção ao dividir por zero', () =>{
    expect(() => validadeEmail("vinicius@hotmail.com").toThrow("Padrão de email inválido."));
});

