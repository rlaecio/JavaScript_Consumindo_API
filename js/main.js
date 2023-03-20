var consultaCep = fetch('https://viacep.com.br/ws/01001010/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro) {
            throw Error('Este cep não existe!')
        } else { 
            console.log(r)
        }})
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento Concluido!'));
    
console.log(consultaCep.r)