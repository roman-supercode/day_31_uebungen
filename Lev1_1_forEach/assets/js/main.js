let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

// Sortiere getraenke vorher alphabetisch.
getraenke.sort();
console.log(getraenke);

//Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.
getraenke.forEach((getraenk) => {
    document.write(getraenk + "<br>");
    console.log(getraenk);
})


