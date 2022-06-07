

// let x = require("./objArray")


// ARRAY EXERCISES
// 1. Array – Find array of Odd/Even/Numbers divisible by 4 


function oddNums(x) {
    let odd = []
    for (num of x) {
        if (x % 2 != 0)
            odd.push(x)
    }
    return odd;
}

function evemNums(x) {
    let even = []
    for (num of x) {
        if (x % 2 == 0)
            even.push(x)
    }
    return even;
}

function divsBY4Nums(x) {
    let divs4 = []
    for (num of x) {
        if (x % 4 == 0)
            divs4.push(x)
    }
    return divs4;
}

// 2. Caluculate Sum of all Odd/Even/Numbers divisible by 

function sumOdd(x) {
    let count = 0;
    for (num of oddNums(x)) {
        count += count;
    }
    return count;
}
function sumEven(x) {
    let count = 0;
    for (num of evemNums(x)) {
        count += count;
    }
    return count;
}
function sumDivs4(x) {
    let count = 0;
    for (num of divsBY4Nums(x)) {
        count += count;
    }
    return count;
}


4
// 3. Find Unique Numbers in the Array 

function uniqueNums(array) {

    var uniqueElems = []
    for (num of array) {
        let current = num
        if (uniqueElems.indexOf(current) == -1)
            uniqueElems.push(current)
    }
    return uniqueElems;
}



// 4. Transform Array to print the type of elements in the Array  
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”] 

function getTypes(array) {
    let typeArray = []
    for (const elem of array) {
        typeArray.push(typeof elem)

    }
    return typeArray;

}



// 5. Destructure Array From the given array, build an object that
//  has array elements as properties. The name of the property 
//  is 
//  <typeof the element>+index destructureArray([50,”apple”,{a:1}]) => {number0:50,string1:”apple”,object2:{a:1}}  
Array3 = [{ c: 5 }, "String", 5]


function destructureArray(Array) {

    var newObject = {}
    for (const key in Array) {

        newObject[typeof Array[key] + key] = Array[key];

    }
    return newObject
}






//  6.  Find Index of first odd number - (using array method and also not using array methods) 

let nums = [4, 2, 1, 5, 6, 7, 8, 9];

function oddNumWithMethod(array){

   return array.find(num => num%2 !==0)
}

 console.log("should be index 2 ---> " + oddNumWithMethod(nums))


function findOdd(array) {

    for (const key in array) {
        if (array[key] % 2 != 0)
            return key;
    }
}



//  7. Convert string to array and array to string. don’t  use split() and toString() 

let str = "String";

let arr = ["S", "t", "r", "i", "n", "g"];


function stringToArray(string) {
    let stringArray = [];
    console.log("hello")
    for (i = 0; i < string.length; i++) {
        stringArray.push(string.charAt(i))
    }
    return stringArray;
}



function ArrayToString(array) {
    var str = "";

    for (let elem of array) {

        str += elem
    }
    return str;
}







// 1. Convert Object to ArrayEach element in the array is the concentation of
//  key+value in the  object.
//
//  convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}   => [a1,b12,cstring,dx1,dy2] 

let obj = { a: 1, b: [1, 2], c: "String", d: { x: 1, y: 2 } };

function convertObjectToArray(obj) {

    let concatt = [];

    for (const key in obj) {
        for (const key in obj) {

            console.log(key, obj[key])

        }
    }


}

convertObjectToArray(obj)



// 2. Minify Object Get objects that has properties of name, ‘a’
//
//[{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]

let arra5y = [{a:1,b:2},{a:2,b:4}]

function minify(array) {
let temp = []


    for (let obj of array) {
        for (let key in obj) {
            if (key == 'a'){
                let x = {}
                x.a = obj[key]
                temp.push(x)
            }
        }

    }return temp
}


//console.log(minify(arra5y))
// 3. Get the Oldest person age
//
//findOldestPerson[{name:’Ram’,age:20},  {name:’Lakshman’,age:15}] => Ram

function oldestPerson(array){
}
    oldestPerson([{name:"ram",age:20},  {name:"Lakshman",age:15}])


// 4. Get the Youngest person name
//
//findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}] => 15


// 5. Find the person whose age is between 16 and 17 years.

//findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}] => {name:’Lakshman’,age:15}