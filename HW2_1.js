function poisk(i) {
    for (let j=2; j<i; j++) {
        if (i%j === 0) {
            return false;           
        }
        continue;
    }
    return true;
}


let num = process.argv[2];
if (num<2){
    return console.log("chislo dolzhno byt' > 1");
    
}
console.time() 
let arr = [];
for (let i=2;i<=num;i++) {
    
    if (poisk(i)) {
        arr.push(i);
    } 
}
const t1 = performance.now();

console.log('massive pravilnyh chisel',arr);
console.timeEnd()

