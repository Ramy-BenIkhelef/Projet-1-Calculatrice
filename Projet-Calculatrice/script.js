let choix;
let firstNumber;
let secondNumber;
let resultat;
do {
    choix = parseInt(prompt("Choisisser une valeur cité ci-dessous : \n 1: Addition \n 2: Soustraction  \n 3: Multiplication \n 4: Division"));
    console.log(choix);
    function calculatrice(){
    if ((isNaN(choix) || choix<1 || choix>4) )
    {
        alert("veuiller inscrire un chiffre proposé dans la boite de dialogue");
    }
    firstNumber = parseInt(prompt("écriver votre premier nombre pour votre opération en chiffre"));
    secondNumber = parseInt(prompt("écriver votre deuxième nombre pour votre opération en chiffre"));

    if(isNaN(firstNumber || secondNumber)){
        alert("un chiffre est demander pour faire l'opération");
    }

    if(choix=1){
        Addition();
    }else if(choix=2){
        Soustraction();
    }else if(choix=3){
        Multiplication();
    }else if(choix=4){
        do {
            alert("attention de choisir le deuxième nombre supérieur à 0")
        } while (secondNumber = 0);
        Division();
    };

};
calculatrice();
} while (isNaN(choix) || choix<1 || choix>4 || !isNaN(resultat) || isNaN(firstNumber ||secondNumber));

function Addition(){
    resultat = firstNumber + secondNumber;
    alert("le resultat de votre opération est " + resultat);
};

function Soustraction(){
    resultat = firstNumber - secondNumber;
    alert("le resultat de votre opération est " + resultat);
};

function Multiplication(){
    resultat = firstNumber * secondNumber;
    alert("le resultat de votre opération est " + resultat);
};

function Division(){
    resultat = firstNumber / secondNumber;
    alert("le resultat de votre opération est " + resultat);
};



