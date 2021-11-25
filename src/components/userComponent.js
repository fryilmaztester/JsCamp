import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/login/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../service/userService.js";

console.log("User component yüklendi..");

let logger01 = new MongoLogger();
let userService = new UserService(logger01);

let user1 = new User(1,"Fatih", "YILMAZ", "İSTANBUL");
let user2 =  new User(2,"Ramazan", "YILMAZ", "Kastamonu");



userService.add(user1.firstName);
userService.add(user2.firstName);


console.log(userService.getById(2));
console.log(userService.list());


console.log("--------------------------");

let customerToAdd = new Customer(54,"Frks","Digital","İzmir","adads")
customerToAdd.type = "customer";
userService.load();
userService.add(new Customer(12,"FRY","YILMAZ","İstanbul"))
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);

