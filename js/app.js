const formula = document.querySelector('.formula');
var total = 0;
var aux = 0;
var operador = '';
var operadorAux = '';
var cambiador = 1;
var contador = 0;
const totalCuenta = document.createElement('p');
const operandos = document.querySelectorAll('.operador');

const operadores = ['+', '-', '*', '/'];

document.addEventListener('keypress', function(e){

    if(e.code.search('Key') === -1){

        
        if(e.charCode >= 42 && e.charCode<=57){
            
            if(e.charCode >= 48 && e.charCode<=57){
                if(cambiador === 1){
                    formula.innerHTML = '';
                }
                cambiador = 0;
                const ingreso = e.key;
                formula.append(ingreso);
                totalCuenta.append(ingreso);
                aux = parseFloat(formula.textContent);
                
            }


            if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
                if(ultimoOperador()){
                    const numeroAux = totalCuenta.textContent.split(totalCuenta.textContent.charAt(totalCuenta.textContent.length - 1))[0]
                    totalCuenta.innerHTML = '';
                    totalCuenta.append(numeroAux);
                    totalCuenta.append(e.key);
                }else{
                    totalCuenta.append(e.key)
                }
                operador = e.key
                hacerCuenta(operador)
            }

        }

        if(e.key === 'Enter'){
            terminarCuenta(operador);
        }

    }

    
})

function ultimoOperador(){
    return operadores.includes(totalCuenta.textContent.charAt(totalCuenta.textContent.length - 1))
}

function hacerCuenta(operador){
    if(totalCuenta.textContent.split(operador)[0].length === 0){
        aux = 0 
    }else{

        if(operadorAux === ''){
            total += parseFloat(totalCuenta.textContent.split(operador)[0])
        }else{
            if (operadorAux === '+'){
                total += aux;
            }
            if (operadorAux === '-'){
                total -= aux;
            }
            if (operadorAux === '*'){
                total *= aux;
            }
            if (operadorAux === '/'){
                total = total / aux;
            }
        }
    }

    totalCuenta.innerHTML = '';


    formula.innerHTML = total;

    cambiador = 1;

    operadorAux = operador;
    
}

function terminarCuenta(operador){
    if(totalCuenta.textContent !== ''){
        hacerCuenta(operador);
    }

    total = 0;
    aux = 0
    operador = '';
    operadorAux = '';

}