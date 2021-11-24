let cart = [
{id: "1", productName: "Telefon", quantity:3, unitPrice: 4000},
{id: "2", productName: "Kitap", quantity:1, unitPrice: 35},
{id: "3", productName: "Mac", quantity:1, unitPrice: 9800},
{id: "4", productName: "Bardak", quantity:2, unitPrice: 23},
{id: "5", productName: "Şarj Aleti", quantity:2, unitPrice: 100},
{id: "6", productName: "Converter", quantity:1, unitPrice: 650},

];





/*

cart.map(product=>console.log(product.productName)); 

Java da ki lambda gibi çalışır. map() fonk ile bütün arrayi döner ve her bir 
arrayi product a atarız sonrasında ise her bir prodct ın productName ini console ayzdıırırız. 
*/

cart.map(product=>console.log(product.productName + " : " + product.unitPrice * product.quantity)); 


console.log(cart.filter(product=>product.unitPrice>1000));

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0);
console.log(total);



function addToCart(cart) {
    cart.push({id: "7", productName: "Power Bank", quantity:1, unitPrice: 869}); //push() metodu array e eleman ekler. 
}

addToCart(cart);
console.log(cart); 


