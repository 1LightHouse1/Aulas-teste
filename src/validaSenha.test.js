const validaSenha = require('./validaSenha');

test('lança uma exceção caso a senha n atenda condicoes', () =>{
    expect(() => validaSenha("Test1").toThrow("Padrão de senha inválido."));
});