
//Exo4.mjs Version de la Prof
// const today = dayjs()

import dayjs from "dayjs";

let person = { // {} ça créer un objet. firstname c'est une caractéristique et "John" c'est sa valeur.
    firstname : "John",
    lastname : "Doe",
    birthdate : dayjs('1977-01-11'),  //format américain, on veut revoir l'affichage donc on utilisera .format()
    power : "Magicien"
}
console.log(person.firstname + " " + person.lastname);
console.log(person.birthdate.format("DD.MM.YYYY") + " " + person.power);

let classes = [{"id" : "1", "firstname" :"John"}, {"id" : "2", "firstname" :"Bryan"}, {"id" : "3", "firstname" :"Mark"}, {"id" : "4", "firstname" :"Harry"}];
// [] créer une liste d'objet donc c'est un tableau. firstname ici ne correspond pas à celui de person.
// 1st argument : currentValue, 2nd argument index, 3rd argument : arr
// arguments are not mandatory if we do not need them
let student_found = classes.find((student, index, classes) =>
    //.find() c'est une fonction qui gère les tableaux.
    //findIndex c'est une fonction qui retourne la postion dans la liste.
    {
        console.log(index); //si on le mets pas c'est pas grave, ça va pas crasher
        console.log(classes); //pareil
        return student.firstname === person.firstname //grâce à return, on sort //et c'est la ligne qui nous intéresse.
    }
)
console.log(student_found);

// 1st argument : currentValue, 2nd argument index, 3rd argument : arr
let student_index_found = classes.findIndex((student) =>
    {
        return student.firstname === person.firstname
    }
)
console.log(student_index_found);


//*
Exercice 4 de la prof:
// const today = dayjs()

let person = {
    firstname : "John",
    lastname : "Doe",
    birthdate : dayjs('1977-01-11'),
    power : "Magicien"
}
console.log(person.firstname + " " + person.lastname);
console.log(person.birthdate.format("DD.MM.YYYY") + " " + person.power);

let classes = [{"id" : "1", "firstname" :"John"}, {"id" : "2", "firstname" :"Bryan"}, {"id" : "3", "firstname" :"Mark"}, {"id" : "4", "firstname" :"Harry"}];
// 1st argument : currentValue, 2nd argument index, 3rd argument : arr
// arguments are not mandatory if we do not need them
let student_found = classes.find((student, index, classes) =>
    {
        console.log(index);
        console.log(classes);
        return student.firstname === person.firstname
    }
)
console.log(student_found);

// 1st argument : currentValue, 2nd argument index, 3rd argument : arr
let student_index_found = classes.findIndex((student) =>
    {
        return student.firstname === person.firstname
    }
)
console.log(student_index_found);
//*
