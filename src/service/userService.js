import { users } from "../data/data.js";
import DataError from "../data/dataErrors.js";

export default class UserService{

    constructor(loggerService){
        //this.users = [];
        this.customers = [];
        this.employees = [];
        this.errors = [];
        this.loggerService = loggerService;
    }

    load(){
        for (const user of users) { //users data fodler ından gelir. 
            
            //.....................................BURAYA REFACTOR YAPILACAKTIR........ BaseClass oluştur ve oradan çek bunları
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidity(user)){
                    this.customers.push(user)
                    }
                    break;
                case "employee": 
                    this.employees.push(user)
                        break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }
    }
     
            //.....................................BURAYA REFACTOR YAPILACAKTIR........ OOP ye göre Yap. 
    checkCustomerValidity(user){
        let requiredField = "id firstName lastName age city".split(" ");
        let isError = false;

        for (const field of requiredField) {
            if(!user[field]){
                isError = true;
                this.errors.push(new DataError(`Validation Problem on ${field} is required`, user))
            }
        }
        return isError; 
    }

    checkEmployeValidity(user){
        
    }

    add(user){

      //  this.users.push(user);
      //  console.log("Kullanıcı Eklendi.... " + user);
        this.loggerService.log(user); 
    }

    list(){
        
       // return this.users;
        //console.log("Kullanıcılar Listelendi....");
    }

    getById(id){
      //  return this.users.find(u=>u.id === id);
    //    console.log("Kullanıcının ıd si alındı: " + id);
    }

}