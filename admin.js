import User from "./user.js"
import {uniqueIds} from "./task_id.js"

export default class Admin extends User{
    constructor(){
        super();
        let gen = this.generateId()
        this.id = gen.next().value;
    }
    createTask(){
        const gen = uniqueIds();
        console.log(`created Task: ${gen.next().value}` )
    }
    id = 0;
    *generateId(){
        while(true){
            yield Date.now()+ this.id++;
        }
    }
}

const ad = new Admin("Krish","Software Engineer", "Admin");
ad.createTask();
