var medicamento = {
    nomeMedicamento: 'Paracetamol',
    valorMedicamento : 10,
    apresentarValorMedicamento : 10 - desconto
};
var paciente = parseInt(prompt('Por favor digite sua idade?'));

function desconto (){
    if (paciente === 60 && paciente < 70){ 
        this.valorMedicamento - 2;
    }
    if (paciente === 71 && paciente < 80){ 
        this.valorMedicamento - 3;
    }
    if (paciente > 80){ 
        this.valorMedicamento -5;
    }else {
        alert ('a idade minima para receber desconto é 60 anos, o valor fica 10 R$!')
    }
}

if (paciente === 60 && paciente <= 70){ 
    alert ('o valor do medicamento é 10 reais, seu desconto será de 20% agora ele custa 8 reais');
}
if (paciente === 71 && paciente < 80){ 
    alert ('o valor do medicamento é 10 reais, seu desconto será de 30% agora ele custa 7 reais');
}
if (paciente > 80){ 
    alert ('o valor do medicamento é 10 reais, seu desconto será de 50% agora ele custa 5 reais');
}
if(paciente < 60) {
    alert ('a idade minima para receber desconto é 60 anos, o valor fica 10 R$!')
};