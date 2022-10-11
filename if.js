'use strict'
console.log('if.js');

let num1 = 200;
let num2 = 50;

if (num1 > num2) {
    console.log(`${num1} yra daugiau už ${num2}.`);
} 
else {
    console.log(`${num1} yra mažiau už ${num2}.`);
}
// Pirmas pratimas
let amzius = 90;

if (amzius < 0) {
    console.log('Neteisingai įvestas amžius.');
} else if (amzius > 200) {
    console.log('Neteisingai įvestas amžius');
} else if (amzius >= 18) {
    console.log('Žmogus yra suaugęs.');
} else {
    console.log('Žmogus yra nepilnametis.');
}

// Antras pratimas



let isMarried = true;
let asn1 = 'Štai jūsų sužadėtuvių žiedų kolekcija';
let asn2 = 'Naujausi Televizorių modeliai CIA';

if (isMarried === true) {
    console.log(asn2);
} else {
    console.log(asn1);
}

// Trečias pratimas

let name;
let birthday = 'geguzes 12 diena';

let pratimas3Obj = {
    name: null,
    birthday: 'geguzes 12 diena'
};

// name = prompt('koks jūsų vardas?')
pratimas3Obj.name = prompt('koks jūsų vardas?')

// console.log(`${name} yra gimęs ${birthday}`);
console.log(`${pratimas3Obj.name} yra gimęs ${pratimas3Obj.birthday}`);