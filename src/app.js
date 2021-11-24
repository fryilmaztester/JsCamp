
/*
Js -> BackEnd
->    Mobil
->    Web

Kullanıcı etkilşimini maksimize ederiz. Dinamikleştirme işlemi yapılır. 
*/


//console.log("Merhaba Kodlama Io");

/*

var doalrDun = 9.20;
console.log(dolarBugun);
var dolarBugun = 9.30;

*/

//Js Type Safe değildir. 
//biz daha cok let keywordunu kullanıyoruz.

//let tanımalandığı blokta execute olur ve calısır. Onun dısında calışmaz. 
//let dolarToday = 9.20;
//let dolarYesterDay = 9.30; 



//const ile bir şey tanımladığında artık başka bir şey tanımlayamazsın. 
const euroToday = 11.2;
const euroYesterDay = 11;
//console.log(euroYesterDay);

//array --> naming onemlidir. 
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]; //Her türlü eleman aynı anda tanımlanabilir. Str, int, array vs. tanımlanabilri. 

//let users = getUser
//console.log(konutKredileri);


console.log("<ul>");
for (let i = 0; i<konutKredileri.length; i++){
console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");



//console.log("<ul>");
for(let i = 0; i<konutKredileri.length;i++){
 //   console.log("<li>" + konutKredileri[i] + "</li>");
} 
//console.log("</ul>");


let showProducts = function (id,...products){
    console.log(id);
    console.log(products);

}

//console.log(typeof showProducts);
//showProducts(10,"Elma","Armut","Karpuz");



