export function* uniqueIds(){
    let id = 0;
    while(true){
        yield Date.now() + "_" + id++;
    }
}

let generator = uniqueIds();

function id(){
    for(let i = 0; i< 10; i++){
    console.log("generator: " + generator.next().value)
}
}