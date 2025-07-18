// O que precisamos fazer e que basicamente, precisamos: coletar a entrada de qual tipo de ingresso o usuario vai escolher, depois vamos
// coletar a quantidade que ele escolheu e vamos verificar com o numero de ingressos vendidos, com isso vamos verificar se existe a 
// quantidade de ingressos a venda que o usuario esta solicitando e se houver vamos realizar a venda subtraindo o numero de ingressos,
// se nao houver mais ingressos teremos que mostrar uma mensagem para o cliente que "nao ha ingressos o suficiente."


// primeiro vamos coletar o campo de tipo de ingresso e quantidade, sempre comecando criando a funcao principal.
// let ingressosVendidos = {'pista': '', 'superior': '', 'inferior': ''};

function comprar () {
    // primeiro vou pegar o tipo ingresso e quantidade;
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        compraSuperior(quantidade);
    } else {
        compraInferior(quantidade);
    }
}


function comprarPista (qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade de ingressos indisponivel.');
    } else {
        qtdPista -= qtd;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
}

function compraSuperior (qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
    alert('Quantidade de ingressos indisponivel.');
    } else {
        qtdSuperior -= qtd;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
}

function compraInferior (qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
    alert('Quantidade de ingressos indisponivel.');
    } else {
        qtdInferior -= qtd;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
}