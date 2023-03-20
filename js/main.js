async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
    
        if (consultaCEPConvertida.erro){
            throw Error('Cep não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro
        estado.value = consultaCEPConvertida.uf;

        //console.log(consultaCEPConvertida)
        return consultaCEPConvertida; 
        
    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP invalido Teste Novamente</p>`;
        //console.log(error)    
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))