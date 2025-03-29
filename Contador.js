document.addEventListener("DOMContentLoaded", function () {
    calcularDiasJuntos();
});

function calcularDiasJuntos() {
    const dataInicio = new Date(2024, 7, 29); // Julho = 7 (mês começa em 0)
    const dataAtual = new Date();
    
    const diferencaTempo = dataAtual - dataInicio;
    const diferencaDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById("contador").textContent = `${diferencaDias} dias`;
}