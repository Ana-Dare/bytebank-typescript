import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponent from "./saldo-component.js";
import DataComponent from "./data-component.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-components.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
console.log(elementoFormulario)
elementoFormulario.addEventListener('submit', function(event) {
console.log("asgdf")
    try {
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
        console.log(inputData.value + "00:00:00")
        let data: Date = new Date (inputData.value);

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        DataComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    
    }
    catch (erro) {
        alert (erro.message);
    }
   

});

