//Syntax: array.splice(index, Anzahl der zu löschenden Elemente, Element, Element);
let array = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
console.log(array);

//Füge Fotos mit der Nummer 008-010 hinzu.
array.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg");
console.log(array);

//Fügen Fotos mit der Nummer 014-019 hinzu.
array.splice(5, 0,
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg");
console.log(array);

//Füge den Rest(000-019) der Fotos hinzu, so dass sie numerisch angezeigt werden.
array.splice(2, 0, //02-07
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg");
console.log(array);

array.splice(11, 0, // 11-13
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg");
console.log(array);