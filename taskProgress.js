export default function* taskProgress(){
    let progress = 0;
    while(progress<=100){
        yield "Current Progress: " + progress + "%";
        progress = progress + 5;
    }
}
let generator = taskProgress();

const intervalId = setInterval(() => {
    let result = generator.next();

    if(result.done){
        console.log("Task Completed");
        clearInterval(intervalId);
    }else{
        console.log(result.value);
    }
},100); 