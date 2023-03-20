async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
    
        if (consultaCEPConvertida.erro){
            throw Error('Cep não existente!');
        }
        console.log(consultaCEPConvertida);
        //return consultaCEPConvertida; 
        
    } catch (error) {
        console.log(error)    
    }
}


let ceps = ['01001001', '01001000'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(resposta => console.log(resposta));
