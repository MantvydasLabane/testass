///1. Duotas masyvas, console.log atspausdinti masyvo ilgį
//const mas1 = [12, 5, 9, 7, 5, 4];

const mas1 = [12, 5, 9, 7, 5, 4];
console.log(mas1.length);

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis".

class Grybas {

    constructor(objektas, tipas) {
    this.objektas = objektas;
    this.tipas = tipas;
    }
}
let g1 = new Grybas ("grybas", "Baravykas");
let g2 = new Grybas ("grybas", "Ūmedė");
let g3 = new Grybas ("grybas", "Lepšis");

console.log(g1);
console.log(g2);
console.log(g3);

