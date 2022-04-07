/*#### Write two tests for the following functions using test framework assertion

#### Add two number
1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
2. After writing the function write 5 tests for above function with different values
3. Throw an error when the arguments passed in not a number.
4. Make first test fail and see if you get the result of second test.
5. If not fix it using the test framework (try...catch) we learned in the testing framework video.

#### Multiply two numbers

1. Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
2. After writing the function write 5 tests for above function with different values
3. Throw an error when the arguments passed in not a number.
4. Make first test fail and see if you get the result of second test.
5. If not fix it using the test framework (try...catch) we learned in the testing framework video.
*/


function add(numA,numB){
    return numA + numB;
}
function multiply(numA,numB){
    return numA * numB;
}

let result, expected;

//testing framework
function test(message,callback){
   try{
      callback();
      console.log(`✅`,message);
   }
   catch(error){
       console.error(error);
    console.log(`❌`,message);
   }
}


// assertion- for compairing two value, if it is not true it will throws an error
function expect(actual){  //actual like result
    //return object because we want multiple function
    return{
      toEqual: function(expected){  //expected
        if(actual !== expected){
            throw new Error(`${actual} is not equal to ${expected}`);
        }
      }
    }
}



function testAdd(){
    result=add(23,45);
    expected=68;
    //call expect function, that expect accepts one actual value and then going to object(toEqual)
    expect(result).toEqual(expected);

    //if(result !== expected){
    //    throw new Error(`${result} is not equal to ${expected}`);
    //}
}
test('adding 23 and 45',testAdd);

function testMulti(){
    result=multiply(23,45);
    expected=68;
    expect(result).toEqual(expected);
    //if(result !== expected){
    //    throw new Error(`${result} is not equal to ${expected}`);
    //}
}

test('multiply 23 and 45',testMulti);
//next test
test('add 12 and 67',()=>{
    expect(add(12,67)).toEqual(45);
});

test('add 66 and 9',()=>{
    expect(add(66,9)).toEqual(75);
});
test('multiply 12 and 6',()=>{
    expect(multiply(12,6)).toEqual(72);
});
test('multiply 23 and 7',()=>{
    expect(multiply(23,7)).toEqual(161);
});
test('multiply 84 and 3',()=>{
    expect(multiply(84,3)).toEqual(252);
});
