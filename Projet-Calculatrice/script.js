let choix;
let firstNumber;
let secondNumber;
let resultat;
let restart = false;


function Addition(nombreA, nombreB){
    return nombreA + nombreB;
};

function Soustraction(nombreA, nombreB){
    return nombreA - nombreB;
};

function Multiplication(nombreA, nombreB){
    return nombreA * nombreB;
};

function Division(nombreA, nombreB){
    if (nombreB == 0) {
    throw new Error("impossible de diviser par 0");
    }
    return nombreA / nombreB;
};


do{
    do {
    choix = parseInt(prompt("Choisisser une valeur cité ci-dessous : \n 1: Addition \n 2: Soustraction  \n 3: Multiplication \n 4: Division"));
    
    }while ((choix!=1 && choix!=2 && choix!=3 && choix!=4));

    do{
    firstNumber = parseInt(prompt("Votre permier nombre :"));
    secondNumber = parseInt(prompt("Votre deuxième nombre :"));
    }while(isNaN(firstNumber || secondNumber));

    try{
    switch (choix) {
    case 1:
        resultat = Addition(firstNumber, secondNumber)
        break;
        case 2:
        resultat = Soustraction(firstNumber, secondNumber)
        break;
        case 3:
        resultat = Multiplication(firstNumber, secondNumber)
        break;
        case 4:
        resultat = Division(firstNumber, secondNumber)
        break;

    default:
        throw new Error("Une erreur est survenue");
        
    }
    alert("Voicie le resultat "+ resultat);
 

    }
    catch(error){
        alert(error);
    }
    restart = confirm("Voulez vous refaire le calcule ?");
}while(restart);





