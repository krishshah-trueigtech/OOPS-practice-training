import User from "./user.js"
import Admin from "./admin.js"
import Member from "./member.js"

const admin1 = new Admin("Ravi", "Ravi@work.com", "Senior Admin");
const admin2 = new Admin("Ved", "Ved@work.com", "Moderator");

const member1 = new Member("Gourav", "gourav@gmail.com", "Gold Member");
const member2 = new Member("Deepak", "deepak@gmail.com", "Silver Member");

console.log("--- Admin Activity ---");
admin1.login();
admin1.createTask();

admin2.login();
admin2.createTask();

console.log("\n--- Member Activity ---");
member1.logout();
member1.completeTask();

member2.login();
member2.completeTask();
member2.logout();