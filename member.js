import User from "./user.js"

export default class Member extends User{
    completeTask(){
        super.login();
        console.log("Completed Task");
    }
    logout(){
        console.log("logged Out")
    }
}
