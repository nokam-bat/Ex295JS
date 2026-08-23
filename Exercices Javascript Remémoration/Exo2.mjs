
//Exo2.mjs
let x = 1;
while (x <= 9){
    console.log(String(x).repeat(x))
    x++
}

//VersionDeCamille La boucle for est plus safe car la condition est mise au début.
//La boucle while est risquée car on risque d'oublier de rajouter x++ à la fin et de tout faire beuger.
for (let i = 1; i <=9; i ++){
    console.log(String(i).repeat(i));
}
//initialisation: let i = 1
//condition d'arrêt: 1 >= 9
//incrémentation (pas d'avancement): i++

//VersionProf avec 2 boucles for
for (let i = 0; i < 10; i++){
    let res = ""
    for (let j = 0; j < i; j++){
        res += i;
    }
    console.log(res);
}
