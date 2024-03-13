function validadeEmail(email){
    const padrãoRegexEmail = /^\w+@\w+\.[a-zA-Z]{2,}$/;

    if(!padrãoRegexEmail.test(email)){
        throw new Error("Padrão de email inválido.");

    }
    return email + " Email valido";
}

module.exports  = validadeEmail;