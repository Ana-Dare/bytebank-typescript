import { formatarMoeda } from "../utils/formatters.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector('.saldo-valor .valor');
renderizarSaldo();
export function renderizarSaldo() {
    console.log(formatarMoeda(Conta.getSaldo()));
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar: function () {
        renderizarSaldo();
    },
};
export default SaldoComponent;
