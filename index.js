const subtrair = () => {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);

    let resultadoSubtracao = num1 - num2;

    document.getElementById("result").value = resultadoSubtracao;
}

const somar = () => {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);

    let resultadoSoma = num1 + num2

    document.getElementById('result').value = resultadoSoma
}

const dividir = () => {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);

    let resultadoDivisao = num1 / num2

    document.getElementById('result').value = resultadoDivisao
}

const multiplicar = () => {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value)

    let resultadoMult = num1 * num2

    document.getElementById('result').value = resultadoMult
}

const media = () => {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);

    let resultadoMedia = (num1 + num2) /2

    document.getElementById('result').value = resultadoMedia
}

const temperatura = () => {
    let temp = Number(document.getElementById('temp').value);
    let mensagem = "";

    if (temp > 35) {
        mensagem = "Está bastante calor!🔥🥵";
    }else if (temp > 23) {
        mensagem = "A temperatura está agradavel☀️😊";
    }else if(temp > 16 ){
        mensagem = "O tempo está bem fresco!🌥️😌";
    }else {
        mensagem = "Está muito frio!❄️🥶";
    }

    document.getElementById('resultTemp').textContent = mensagem
}

const contador = () => {
    let mensagem = '';
    let cont = 10
    let intervalo = setInterval(() => {
        if(cont > 0){
            document.getElementById('contador10').textContent = cont;
            cont--
        } else {
            clearInterval(intervalo);
            document.getElementById('contador10').textContent = "Lançamento autorizado! 🚀🚀";
        }
    },1000)
}

const textHello = () => {
    let mensagem1 = "Seja bem-vindo!"
    let mensagem2 = "É um prazer recebê-lo aqui!"
    let alternar = true;

    setInterval(() => {
        let elemento = document.getElementById('messageHello');

        if(elemento) {
            elemento.textContent = alternar ? mensagem1 : mensagem2
            alternar = !alternar;
        }

    }, 1000)
}

document.addEventListener("DOMContentLoaded", textHello);
document.getElementById('btnContador').addEventListener('click', contador)
document.getElementById('media').addEventListener('click', media);
document.getElementById('multi').addEventListener('click', multiplicar);
document.getElementById('dividir').addEventListener('click', dividir);
document.getElementById('somar').addEventListener('click',somar);
document.getElementById("subtrair").addEventListener('click',subtrair);
document.getElementById('aplicarTemp').addEventListener('click', temperatura);
