function poisk(num) {    
    if (num<2){
        return console.log("chislo dolzhno byt' > 1");     
    }
    let arr = [];
    for (let j=2;arr.length < num;j++) {
        let flag = false;
        for (let k=2;k<j;k++) {
            if (j%k === 0) {
                flag = false;
                break;        
            }
            flag = true;
        }
        if (flag === true) {
            arr.push(j);
        }       
    }
    return arr
}

console.time();
console.log(poisk(process.argv[2]));
console.timeEnd();