class SequenceGenerator{
    *number(n){
        let num = 0;
        while(true){
            yield num
            num++
            if(num > n){
                break;
            }
        }
    }
}

const instance = new SequenceGenerator();

const gen = instance.number(3);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());