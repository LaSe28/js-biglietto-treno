let element = document.getElementById('my-output');
const euroKm = 0.21

let distance = prompt('Quanti km devi percorrere?');
let age = prompt('Quanti anni hai?');

let price = distance * euroKm;
let finalPrice = price.toFixed(2);

let discount40 = (price * 40) / 100; 
let discounted40 = finalPrice - discount40;
let finalPrice40 = discount40.toFixed(2)

let discount20 = (price * 20) / 100; 
let discounted20 = finalPrice - discount20;
let finalPrice20 = discounted20.toFixed(2)



if (age > 65){
    element.innerHTML = `
    <div>
        Il prezzo è <span class="red">${finalPrice40}</span>
    </div>`
} else if (age < 18 ){
    element.innerHTML = `
    <div>
        Il prezzo è <span class="red">${finalPrice20}</span>
    </div>`
} else {
    element.innerHTML = `
    <div>
        Il prezzo è <span class="red">${finalPrice}</span>
    </div>`
}