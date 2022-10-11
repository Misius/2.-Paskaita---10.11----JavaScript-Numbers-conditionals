'use strict';
console.log('script.js');

const userInfoOutput = document.getElementById('main');
let user = {
    Vardas: 'Serbentautas',
    Pavarde: 'Bordiuras',
};

let resultHtml = `
    <h2>User informaption</h2>
    <p>Vartotojo vardas yra ${user.Vardas}, o pavardė ${user.Pavarde}. </p>
`;

console.log('results', resultHtml);

userInfoOutput.innerHTML = resultHtml;

