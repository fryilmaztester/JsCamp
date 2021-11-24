function addToCart(productName, quantity){
    console.log("Sepete Eklendi: " + productName + " adet: " + quantity);
}


//Fonksiyonlar da paramtereler sırasıyla yerleşir. 
//Önce eklenen parmatte productname olarak, diğeri quantity olarak olur 
addToCart("Elma", 10);
addToCart("Yumurta");
addToCart("Pc");


let sayHello = () =>{
    console.log("Ben bir fonksiyonum ve değişkene atandım");
}

sayHello();

let sayHelloTwo =()=>{
    console.log("Ben diğer bir fonksiyonum ve diğer değişkene atandım.");
}

sayHelloTwo();

function addToCart03(product){
    console.log("Ürün: " + product.productName);
    console.log("Adet: " + product.unitPrice);
    console.log("Fiyat: " + product.quantity);
}

let product1 = {productName: "Elma", unitPrice: 5, quantity: 5};
addToCart03(product1);


//Memory Management
let product02 = {productName: "Elma", unitPrice: 5, quantity: 5}; //Object Tip Referans Tipi 
let product03 = {productName: "Elma", unitPrice: 5, quantity: 5};
product02 = product03;
product02.productName = "KARPUZ";
console.log(product02.productName);

/*
Objectler Heap hafızada Referans tipi ile tutulur. Obj ismi steakta, değerleri heapte tutulur.
Ve product02 = product03; burada 03 un referans değeri ile 02 nim referans değeri eşitlenir yani 
02 nin refrans ı da gider 03 ünün de değerlerini tutar. 
*/


let sayi1 = 10; //Sayısal Tip verisi
let sayi2 = 20;
sayi1 = sayi2;
sayi2=100;
console.log(sayi1);


function addToCart04(x) {
    console.log(products);
}

let products = [
    {productName: "Elma", unitPrice: 5, quantity: 5},
    {productName: "Armut", unitPrice: 5, quantity: 5},
    {productName: "Karpuz", unitPrice: 5, quantity: 5}
];
addToCart04(products);


function add(number01, number02) {
    console.log(number01 + number02);
}

add(20,30);

//Java da varragslar burada destructşon olarak işlem görür. Rest işlemi
function add02(...numbers){

    let sum = 0;
    for(let i=0; i<numbers.length; i++){
       sum = sum + numbers[i];
    }
    console.log(sum);
    //console.log(numbers);

}

add02(20,30);
add02(30,30,40);
add02(40, 50,60,70);


//Spread işlemi 

let [icAnadolu,marmara ,karadeniz,[icAnadoluCiti]] = [

    {"name":"Ic Anadolu", popualiton :"20M"},
    {"name":"Marmara", popualiton :"50M"},
    {"name":"Karadeniz", popualiton :"25M"},

    [
        ["Ankara", "Konya"],
        ["İst", "Bursa"],
        ["Kastamonu", "Sinop"],
    ]
]

console.log(icAnadoluCiti);

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);



