console.log("Script nova-transacao-component.js carregado!");

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if(!elementoFormulario.checkValidity()) {
        alert('Preencha todoos os campos da transação!');
        return;
    }

const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
let valor: number = inputValor.valueAsNumber;
let data: Date = new Date (inputData.value);

if(tipoTransacao == TipoTransacao.DEPOSITO){
    saldo += valor;
} else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
    saldo -= valor;
} else {
    alert("Tipo detransação inválida!");
    return;
}

elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); 

const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
}

console.log(novaTransacao);
elementoFormulario.reset();

});

