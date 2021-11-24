export default class UserService{

    constructor(loggerService){
        this.users = [];
        this.loggerService = loggerService;
    }

    add(user){

        this.users.push(user);
      //  console.log("Kullanıcı Eklendi.... " + user);
        this.loggerService.log(user); 
    }

    list(){
        
        return this.users;
        //console.log("Kullanıcılar Listelendi....");
    }

    getById(id){
        return this.users.find(u=>u.id === id);
    //    console.log("Kullanıcının ıd si alındı: " + id);
    }

}