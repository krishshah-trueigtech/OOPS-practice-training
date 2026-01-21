import User from "./user.js"

class Member extends User{
    completeTask(){
        console.log("Completed Task");
    }
}

const newMember = new Member("Krish","Software Engineer","");
newMember.completeTask();
newMember.login();