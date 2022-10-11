'use strict'

console.log('string.js');

let sen1 = 'Kei nori parašyti kažką \'kabutėse\' tai reikia sukeisti kabučių tipą arba parašyti \\ ';
console.log(sen1);

let backTickSent = `galim
rašyti
keliose eilutėse
`
console.log('backTickSent', backTickSent);
console.log('backTickSent upper', backTickSent.toLocaleUpperCase());


let sent2 = 'gyveno kartą programuotojas'
console.log( sent2.charAt(0).toLocaleUpperCase() + sent2.slice(1));