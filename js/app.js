let total = 0;
let operador = '';
let numero1 = 0;
let numero2 = 0;
let cantOperador = 0;
let cambiador = 0;

const formula = document.querySelector('.formula');

document.querySelector('.contenedor-calculadora').addEventListener('click', e => {
    if(e.target.classList.contains('boton')){
        if(e.target.classList.contains('numero')){
            if(cambiador < 1){
                formula.innerHTML = '';
            }
            cambiador = 1;
            formula.innerHTML += e.target.innerHTML;
            if(cantOperador < 1){
                numero1 = parseFloat(formula.innerHTML);
            }else{
                numero2 = parseFloat(formula.innerHTML);
            }
        }
    }
    if(e.target.classList.contains('operador')){
        if(e.target.id === 'negativo'){
            let resultado;
            if(cantOperador === 0 || numero2 === 0){
                resultado = cambiarSigno(numero1);
                numero1 = resultado;
            }else{
                resultado = cambiarSigno(numero2);
                numero2 = resultado;
            }
            formula.innerHTML = resultado;
        }else if(e.target.id === 'porcentaje'){
            let resultado;
            if(cantOperador === 0 || numero2 === 0){
                resultado = porcentaje(numero1);
                numero1 = resultado;
            }else{
                resultado = porcentaje(numero2);
                numero2 = resultado;
            }
            formula.innerHTML = resultado;
        }else{
            if(cantOperador > 0){
                calcularTotal();
                formula.innerHTML = total;
            }
            cambiador = 0;
            operador = e.target.id;
            cantOperador = 1;
        }
    }
    if(e.target.classList.contains('total')){
        calcularTotal();
        numero1 = 0;
        numero2 = 0;
        total = 0;
        cambiador = 0;
    }
    if(e.target.classList.contains('limpiar')){
        reset();
    }
})

const calcularTotal = () => {
    switch (operador) {
        case 'sumar':
            total = sumar(numero1, numero2);
            break;
        case 'restar':
            total = restar(numero1, numero2);
            break;
        case 'multiplicar':
            total = multiplicar(numero1, numero2);
            break;
        case 'dividir':
            total = dividir(numero1, numero2);
            break;
    
        default:
            break;
    }
    numero1 = total;
    numero2 = 0;
    formula.innerHTML = total;
}

const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

const cambiarSigno = num => {
    return num * (-1);
}

const porcentaje = num =>{
    return num / 100;
}

const reset = () => {
    numero1 = 0;
    numero2 = 0;
    total = 0;
    cambiador = 0;
    formula.innerHTML = 0;
}