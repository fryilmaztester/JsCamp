import User from "./user.js";

export default class Customer extends User{
    constructor(id, firstName, lastName, city,age, creditCard){
        super(id, firstName, lastName, city,age); 
        this.creditCard = creditCard;
    }
}