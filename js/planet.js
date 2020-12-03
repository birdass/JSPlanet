let planet = ["Mercury", "Venus","Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
planet.push('Pluto'); //  добавление планеты в массив
console.log(planet); // показать длинну массива
let output = '';

for(let i = 0; i < planet.length; i++){
    console.log(i+1, planet[i]);
    output += ` <li>${planet[i]}</il>` ;
}
document.querySelector(".list"). innerHTML = output;