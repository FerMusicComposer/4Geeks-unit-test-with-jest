const sum = (a,b) => {
    return a + b
}

console.log(sum(7, 3));

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollars) {
    return dollars * 110.43;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"]; 
}

function fromYenToPound(yens) {
    return yens * 0.0065;
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};