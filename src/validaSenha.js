function validaSenha(senha){
    const padrãoRegexSenha = /^(?=.*[a-zA-Z])(?=.*\d).{5}$/

    if(!padrãoRegexSenha.test(senha)){
        throw new Error("Padrão de senha inválida.");

    }
    return senha + " senha valida";
}

module.exports  = validaSenha;