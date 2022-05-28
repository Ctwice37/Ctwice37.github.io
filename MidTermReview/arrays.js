

//Create an Array empty/some elements

let array = [];
let array2 = [{a:1}, "string", 34];
let arrayOfStrings = ["apple", "banana", "pear"];

let obj = array2[0]

console.log(obj)


//update Array

array2[2] = "update string";
console.log(arrayOfStrings)

// find index of element

array.indexOf("String");

//Find if element exists or not
console.log(array2.indexOf("hello")>=0)

// Delete item - remove the element at Nth position

array2[1]  = null //wrong way to delete
delete array2[1]; //correct way
array2.splice(1,1); //start of index to be delete(1), delete (1)

//insert in middle of array

array2.splice(1, 0, "new element1", "another element"); //start pos, no deletions(0), elements to be added....

//shift --delete from front
//unshift --add to front ("new fruit")
//push --add to end
//pop --delete from end

console.log("before unshift(add): ---- " + arrayOfStrings)

arrayOfStrings.unshift("sdfds")

console.log("after unshift(add): ---- " + arrayOfStrings)



//**(Splice) --modifies array
//**[Slice] --does not modify


//subset of array

let newArray = [1,2,3,4,5]

console.log("Slice: " + newArray.slice(1,3)) //start inclusion, end exclusive --> output: [2,3]

//concat
let anotherArray = [6,7,8]

let mergedArray = newArray.concat(anotherArray)

console.log("1-5 + 6-8 = " + mergedArray)

///////////////////////////////////

// OBJECTS

//Create object/delete

let obj1 = {a:1};

obj = null;




//Update properties of an object


// obj.a = 2;

// let key = "a";

// obj[0] = 0;

// obj["a"] = 2;

//remove properties

// delete obj.a; //a property is remove from obj
// obj.a = null //a is assignied to null, (a) still exists in


//copy clone object

// let obj1 = obj;

 //let newObject = {a:1 , b: "string" , c:[1,2], d: {a:1, b:2}}

//Clone object
//for-in loop to iterate through the properties of an object


//key -> key
//value -> obj[key]

let newArray1 = {a:1 , b: "string" , c:[1,2], d: {a:1, b:2}}

let aa = function(a){
    let b = {};
for (const key in a) {
    b[key] = a[key]
        
    }return b
}



console.log("clone: " + JSON.stringify(aa(newArray1)))


//typeOf() --gives object type
//Array.isArray() --


let bb = function(a, s){
for (const key in a) {
    if(a[key] == s)
        return true
    }return false
}


console.log(bb(newArray1, "strsing"))





//////////////////////


let objeee = [{name:"a", age:20}, {name:"b", age:33}, {name:"c", age:33}]


//sum of the ages using .reduce

objeee.reduce(function(accumulator, element, index, array){ //accumulator==prev
        console.log(prev, element, index)

        return accumulator+element.age;

}, 0)

// return array of names

objeee.reduce(function(accumulator, element, index, array){ //accumulator==prev
    console.log(prev, element, index)

    accumulator.push[element.name]

    return accumulator;

}, []) //inital value is empty array []







