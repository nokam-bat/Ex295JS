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