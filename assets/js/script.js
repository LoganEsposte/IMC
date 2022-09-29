
// MODAL

function abrirModal(){
    let modal = document.querySelector('.modal');
    modal.style.display =  'block';
};

function fecharModal (){
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
};

// PROGRAMA 

function coletarDados(){
    // Coletando Inputs
    let inputPeso = document.querySelector('.peso');
    let inputAltura = document.querySelector('.altura');
    let inputResultado = document.querySelector('.resultado');
    // Zerando classe que define a cor do resultado
    inputResultado.classList.remove('positivo')
    inputResultado.classList.remove('negativo')
    inputResultado.classList.add('neutro')

    // Pegando valores dos inputs
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    // valida peso e altura
    validacao(peso, altura, inputResultado);   
};

function validacao (peso, altura, inputResultado){
    if(!peso){
        inputResultado.innerHTML = 'Peso Inválido'
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('positivo')
        inputResultado.classList.add('negativo')
        return 
    }
    if(!altura){
        inputResultado.innerHTML = 'Altura Inválido'
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('positivo')
        inputResultado.classList.add('negativo')
        return 
    }
    // Passou nos testes 
    console.log('passou')
    return calculaIMC(peso, altura, inputResultado)
};

function calculaIMC (peso, altura, inputResultado) {
    let imc = peso / altura ** 2;
    imc = imc.toFixed(2);

    if(imc > 39.9){
        inputResultado.innerHTML = `${imc} - ${mensagens[5]}`;
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('neutro')
        inputResultado.classList.add('positivo')
        return
    };
    if(imc > 34.9){
        inputResultado.innerHTML = `${imc} - ${mensagens[4]}`;
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('negativo')
        inputResultado.classList.add('positivo')
        return
    };
    if(imc > 29.9){
        inputResultado.innerHTML = `${imc} - ${mensagens[3]}`;
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('negativo')
        inputResultado.classList.add('positivo')
        return
    };
    if(imc > 24.9){
        inputResultado.innerHTML = `${imc} - ${mensagens[2]}`;
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('negativo')
        inputResultado.classList.add('positivo')
        return
    };
    if(imc > 18.6){
        inputResultado.innerHTML = `${imc} - ${mensagens[1]}`;
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('negativo')
        inputResultado.classList.add('positivo')
        return
    };
    if(imc < 18.5){
        inputResultado.innerHTML = `${imc} - ${mensagens[0]}`;
        inputResultado.classList.remove('neutro')
        // inputResultado.classList.remove('negativo')
        inputResultado.classList.add('positivo')
        return
    };
};

const mensagens = ['Abaixo do Peso','Peso Ideal','Acima do Peso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];

// console.log(Number(peso.value));
// console.log(Number(altura.value));
// console.log(resultado.value);