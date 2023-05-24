
function totalAmount(basket) {
    let amount = 0;
    for (let i=0;i<basket.length;i++) {
        amount = amount + basket[i].amount;
    }
    console.log(amount);
    return amount
}

function totalSum(basket) {
    let sum = 0;
    for (let i=0;i<basket.length;i++) {
        sum = sum + basket[i].good.price;
    }
    console.log(sum);
    return sum
    
}

function addGoods(basket,good,amount) {
    basket.push(good,amount);
    return basket
}

function delGoods(basket,index) {
    delete basket[index];
    arr = basket.filter(function(e){return e});
    return arr
}

function delBasket(basket) {
    basket.length = 0;
    return basket
}

const good = {
    id: '',
    name: '',
    description: '',
    sizes: [],
    price: 0,
    available: false,
}

const good1 = {
    id: 0001,
    name: 'sneakers',
    description: 'sneakears teen',
    sizes: [36,37,38,39,40],
    price: 1000,
    available: true,
}

const good2 = {
    id: 0002,
    name: 'skirt',
    description: 'women clothes',
    sizes: [42,44,46,48,50,],
    price: 1250,
    available: true,
}

const good3 = {
    id: 0003,
    name: 'abrigo',
    description: 'women clothes outerwear',
    sizes: [42,44,46,48,50,],
    price: 1750,
    available: true,
}

const good4 = {
    id: 0004,
    name: 'suit',
    description: "men's suit",
    sizes: [46,48,50,52,54,56],
    price: 2000,
    available: false,
}

const good5 = {
    id: 0005,
    name: 't-shirt',
    description: "men's t-shirts",
    sizes: [46,48,50,52,54,56],
    price: 1144,
    available: true,
}

const basket1 = [{
    good: good1,
    amount: 3,
}
]

const basket2 = [
    {
    good: good4,
    amount: 5,
    },
    {
    good: good1,
    amount: 11,
    },
    {
    good: good2,
    amount: 9,
    }
]

const basket3 = [
    {
    good: good5,
    amount: 1,
    },
    {
    good: good5,
    amount: 1,
    },
]

console.log("totalAmount:", totalAmount(basket2));
console.log("totalSum:", totalSum(basket2));
console.log("addGoods to basket:", addGoods(basket3,good1,100));
console.log("addGoods to basker:", addGoods(basket3,good2,99));
console.log("delGoods from basket :", delGoods(basket3,2));
console.log("delBsasket:", delBasket(basket3));