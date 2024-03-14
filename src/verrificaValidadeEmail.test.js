const validadeEmail = require('./verificaValidadeEmail');

test('lança uma exceção caso nao seja um email valido', () =>{
    expect(() => validadeEmail("vinicius@hotmail.com").toThrow("Padrão de email inválido."));
});

