// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 110.43 yens", function(){

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 dollar are 110.43 yens, then 3.5 dollars should be (3.5 * 110.43)
    const expected = 3.5 * 110.43; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(386.505); //1 dollar are 110.43 yens, then 3.5 dollars should be = (3.5 * 110.43)
})

test("One yen should be 0.0065 pounds", function(){

    // use the function like its suppoed to be used
    const yens = fromYenToPound(3500)

    // if 1 yen are 0.0065 pounds, then 3500 yens should be (3500 * 0.0065)
    const expected = 3500 * 0.0065; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3500)).toBe(22.75); //1 yen are 0.0065 pounds, then 3500 yens should be = (3500 * 0.0065)
})