function* count(n){
    count = 1;
    while(count <=n){
        yield count;
        count++;
    }
}
let gen = count(5);
for (let value of gen){
    console.log(value)
}