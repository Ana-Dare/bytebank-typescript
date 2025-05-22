let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if(!elementoFormulario.checkValidity()) {
        alert('Preencha todoos os campos da transação!');
        return;
}

const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
const inputValor = elementoFormulario.querySelector('#valor');
const inputData = elementoFormulario.querySelector('#data');

let TipoTransacao = inputTipoTransacao.value;
let valor = inputValor.value;
let data = inputData.value;

if(TipoTransacao == "Depósito"){
    saldo += valor;
} else if (TipoTransacao == "Transferência" || TipoTransacao == "Pagamento de Boleto") {
    saldo -= valor;
} else {
    alert("Transação inválida!");
    return;
}

elementoSaldo.textContent = saldo;

const novaTransacao = {
    TipoTransacao: TipoTransacao,
    valor: valor,
    data: data
}

console.log(novaTransacao);
elementoFormulario.reset();

});

