import User from "./user.js"

class Admin extends User{
    createTask(){
        console.log("created Task")
    }
}

const ad = new Admin("Krish","Software Engineer", "Admin");
ad.createTask();
ad.login();