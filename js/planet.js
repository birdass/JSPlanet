let planet = ["Mercury", "Venus","Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
planet.push('Pluto');
console.log(planet);


const html = `  
    <ul> 
        <li> ${planet[0]} </il>
        <li> ${planet[1]} </il>
        <li> ${planet[2]} </il>
        <li> ${planet[3]} </il>
        <li> ${planet[4]} </il>
        <li> ${planet[5]} </il>
        <li> ${planet[6]} </il>
        <li> ${planet[7]} </il>
        <li> ${planet[8]} </il>
    </ul>
    `;

    document.body.innerHTML = html;