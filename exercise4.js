// create triangle pattern

function trianglePattern(n){
    var k = 1
    var output = " ";
    for(var i = 1; i <= n; i++){
        for(var j = 1; j <= i; j++){
            k < 10 ? output += "0"+ k++ + " " : output += k++ + " "
        }
        console.log(output);
        output = " ";
    }
}

trianglePattern(4)

// creat fizzbuzz

function fizzBuzz(n2){
    let arr = []
    for(var i = 1; i <= n2; i++){
        if(i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz");
        else if(i % 5 === 0) arr.push("Buzz");
        else if(i % 3 === 0 ) arr.push("Fizz");
        else arr.push(i);
    }
    return arr;
}

console.log(fizzBuzz(20).toString());

// create BMI

function bmi(weight, height){
    let bmi = weight / (height*height)
    if(bmi < 18.5) {
        return "less weight";
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    }
    else if(bmi >= 25.0 && bmi <= 29.9){
        return "overweight"
    } 
    else if(bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight"
    }
    else if(bmi > 39.9) {
        return "obesity"
    }
}
console.log(bmi(55,1.5));

//create remove odd numbers

function removeOddNumber(){
    let number = [1,2,3,4,5,6,7,8,9,10];
    let myArray = [];

    for (let p = 0; p < number.length; p++){
        if(number[p] % 2 === 0) myArray.push(number[p]);
    }
    console.log(myArray);
}

removeOddNumber();

//split a string and convert it into an array

function convertWords(){
    let words = "Hello World";
    let newArray = words.split(" ")
    console.log(newArray);
}

convertWords()