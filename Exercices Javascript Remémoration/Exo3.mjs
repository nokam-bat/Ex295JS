
//Exo3.mjs
//a
const addition = (a, b) =>{
    return a + b;
};
//On peut écrire différemment
//const addition = (a, b) => a + b;
const soustraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
//const division = (a, b) => a / b;

//b
const division = (a, b) => {
    if (b === 0) {
        throw new Error("Divison par zéro interdite");
    };
    return a / b;
};

//c
//pas envie maintenant.
