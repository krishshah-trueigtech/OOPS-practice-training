function* count(n){
    count = 1;
    while(count <=n){
        yield count;
        count++;
    }
}
let gen = count(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

for (let value of gen){
    console.log(value)
}