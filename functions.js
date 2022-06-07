// // function caller(b){
// //     console.log(b);
// //     b(5);
// // }


// // let a = function(x){
// //     console.log(" here:" , x)
// // }


// // caller(b);



// let s = ["apple", "banana", "pear"];

// let z = function(a){
//     let s = []; 
//     for(i = 0; i < a.length; i++){
//         s.push(a[i].length)
//     }
//     return s;
// }


// console.log(z(s));


// let w = function(a){
//     let s = []; 
//     for(i = 0; i < a.length; i++){
//         s.push(a[i].length)
//     }
//     return s;
// }



// let find5 = function(a){
//     for(i = 0; i < a.length; i++){
//         if(a[i].length == 5)
//             return a[i]}
//     return null        

// }
// console.log("");
// console.log("find5: " + find5(s));
// console.log("");


// let find5Index = function(a){
//     for(i = 0; i < a.length; i++){
//         if(a[i].length == 5)
//             return i}
//     return null        

// }

// console.log("find5Index: " + find5Index(s));
// console.log("");



let myArray = ["apple", "grapes", "bananas"]

// returns an array of indexes, each element
//same as:
// let resultArr = [];
// for(i = 0;< array.length;i++)
// resultArr.push(arr[i])

let result = myArray.map(function(element, index, array){
    return index;

})

console.log(result, myArray)


let result1 = myArray.filter(function(element, index, array){
    return element.length>6; //condition 
})

console.log(result1, myArray)


let myArray2 = [1,3,5,6];

let result2 = myArray2.reduce(function(prev, element, index, array){
        return prev + element;

}, 0); // 0 is the the initial value
    //previous starts at inital value (0)
    //starts at first index, take element at that index
    //add element value to prev....


console.log(result2, myArray2);


console.log("result 2: " + result2);


let arry = [{name: "peter", salary: 100},
            {name: "Gregory", salary: 400},
            {name: "Charles", salary: 700}]

// let result3 = arry.reduce(function(prev, element, index, array){
//     let greatest = 0;
//     let obj;
//     if(element.salary > greatest)
//         obj = element[index]

//     return odj;

// }, 0);

console.log([3,6,777,9].reduce(function(prev, element,index,array){
    return (prev>element)?prev:element;
},0)





console.log("object : " + result3)

