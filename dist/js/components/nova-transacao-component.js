import SaldoComponent from "./saldo-component.js";
import DataComponent from "./data-component.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-components.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
console.log(elementoFormulario);
elementoFormulario.addEventListener('submit', function (event) {
    console.log("asgdf");
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert('Preencha todoos os campos da transação!');
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
        const inputValor = elementoFormulario.querySelector('#valor');
        const inputData = elementoFormulario.querySelector('#data');
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        console.log(inputData.value + "00:00:00");
        let data = new Date(inputData.value);
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        DataComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
