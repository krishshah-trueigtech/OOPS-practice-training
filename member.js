import User from "./user.js"
import taskProgress from './taskProgress.js'
export default class Member extends User{
    *completeTask(){
        console.log(taskProgress().next().value);
    }
    logout(){
        console.log("logged Out")
    }
}

const member1 = new Member("Gourav", "gourav@gmail.com", "Gold Member");

member1.completeTask()