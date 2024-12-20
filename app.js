function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    if (de > ate) {
        alert('Valor incorreto no campo "Do número", número não pode ser maior que o campo "Até o número"');
    } else {
        // sorteia um numero por vez enquanto não chegar no numero dentro da variavel quantidade
        for (let i = 0; i < quantidade; i++) {
        //sorteia um numero aleatorio
        numero = obterNumeroAleatorio(de, ate);

        //verifica se o numero ja foi sorteado, se verdadeiro sorteia outro numero
        while (sorteados.includes(numero)) { 
            numero = obterNumeroAleatorio(de, ate);      
        }
        //coloca dentro do array os numero que estão sendo sorteados
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    alterarStatusBotao();
    }

    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}

