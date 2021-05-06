var total = 0;
var aux = 0;
var operador = '';
var operadorAux = '';
var contador = 0;
var cambiador = 1;


document.querySelector('.contenedor-calculadora').addEventListener('click', function(e){
    if(e.target.parentElement.classList.contains('boton')){
        if(e.target.classList.contains('numero')){
            operandos.forEach( elem => {
                elem.parentElement.classList.remove('activo');
            })
            if(cambiador === 1){
                formula.innerHTML = '';
            }
            cambiador = 0;
            formula.append(e.target.textContent)
            totalCuenta.append(e.target.textContent)
            aux = parseFloat(formula.textContent);
        }
        if(e.target.classList.contains('operador')){
            operandos.forEach( elem => {
                if(elem === e.target){
                    e.target.parentElement.classList.add('activo');
                    if(ultimoOperador()){
                        const numeroAux = totalCuenta.textContent.split(totalCuenta.textContent.charAt(totalCuenta.textContent.length - 1))[0]
                        totalCuenta.innerHTML = '';
                        totalCuenta.append(numeroAux);
                        totalCuenta.append(e.target.textContent);
                    }else{
                        totalCuenta.append(e.target.textContent)
                    }
                    operador = e.target.textContent
                    hacerCuenta(operador)
                }else{
                    elem.parentElement.classList.remove('activo');
                }
            })
        }
        if(e.target.classList.contains('total')){
            terminarCuenta(operador);
        }
        if(e.target.classList.contains('limpiar')){
            limpiarDatos();
        }
    }
})