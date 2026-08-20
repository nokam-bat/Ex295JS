//Exo1
//a
let playlist = ["HeartAttack", "Maniac", "Baqara"];

//b
console.log(playlist.length);

//c
playlist.push("Macarena", "Amnesie");

//d
function showPlaylist(){
    for( let name of playlist) {
        console.log(name)
    }
}
showPlaylist();

//e
playlist.pop();
showPlaylist();

//f
playlist.splice(1,1);
showPlaylist();

//g
playlist.splice(6,1);

//Exo2
let x = 1;
while (x <= 9){
    console.log(String(x).repeat(x))
    x++
}

//VersionDeCamille La boucle for est plus safe car la condition est mise au début.
//La boucle while est risquée car on risque d'oublier de rajouter x++ à la fin et de tout faire beuger.
//for (let i = 1; i <=9; i ++){
//    console.log(String(i).repeat(i));
//}

//Exo3
//a
