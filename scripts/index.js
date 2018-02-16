//let shoeObject = [shoes, price, description, img];
//let shoes = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5", "shoe6", "shoe7", "shoe8", "shoe9"];
//let price = [99, 199, 299, 399, 499, 599, 699, 799, 899];
//let description = ["Nice beach sandals", "To the youngster", "For the sporty one", "For the hipster", "A good shoe for the winter", "A gentle tree shoe", "Shoes for the party",  ]

let myShoes = [
    {name : 'Sandals', price : '99', description : 'This is a clean sandal', image : '../images/shoe1.jpg'},
    {name : 'Baby shoes', price: '199', description : 'Shoes for the youngsters', image : '../images/shoe2.jpg'},
    {name : 'Training shoes', price: '299', description : 'For the ones who wants to train', image : '../images/shoe3.jpg'},
    {name : 'Dr. Martin\'s', price: '399', description : 'These boots are made for walking', image : '../images/shoe4.jpg'},
    {name : 'Winter boots', price: '499', description : 'Winter is coming', image : '../images/shoe5.jpg'},
    {name : 'Tree shoes', price: '599', description : 'For the one with hard skin', image : '../images/shoe6.jpg'},
    {name : 'High heels', price: '699', description : 'Are we going to a party?', image : '../images/shoe7.jpg'},
    {name : 'Pinkies', price: '799', description : 'Favourite shoes among the Teletubbies', image : '../images/shoe8.jpg'},
];

let body = document.getElementsByTagName("body")[0];
let productSec = document.createElement("section");
productSec.setAttribute("id", "products");
body.appendChild(productSec);

for(const shoes of myShoes) {
    document.getElementById("products").innerHTML +=
   `<div class="prodDetail">
   <h3>${shoes.name}</h3>
   <img src="${shoes.image}">
   <p>${shoes.price} kr<br>
   ${shoes.description}</p>
   <div class="buttonContainer"><button type="button">Add to cart</button></div></div>`;
}





