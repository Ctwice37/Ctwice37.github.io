// // var firstVar =  "Some Variable";
// // var second = 2 

// // var floatType = 12.5

// // var booleanType1 = true
// // var booleanType2 = false
// // var someVar = null
// // var undefinedType;


// // // function test(){
// // //     let x = 10;
// // //     if(x >10){
// // //         let y = 5;
// // //     }
// // //     console.log(y)
// // // }


// // // test();


// // const p = 5;

// // var obj = {x:3, y:"String value", nested:{a:1}, arrayE:[1, 2]}


// // var stringType = "my String"

// // // console.log(stringType.charAt(3),p)
// // // console.log(p)


// // function addTwo(number1, number2){
// //     console.log(number1 + number2)
// // }

// // addTwo(3, 5);


// // window.onload = function(){
// //     alert("Hello World!");
// //     }



// // let array = [1, 3, 4]

// // let objaaa = {a:"String", b:1}

// // objaaa.a = {b:10}

// // delete objaaa.b

// // let objSecond = objaaa

// // objaaa.a = {a:89}


// let objArray = [{a:1, b:2}, {a:2, b:79}]


// function addElements(s){
//     let x = 0
//         for(i = 0; i < s.length; i++){
//         x+=s[i].b
//         }

//         return x

// }


// console.log("add elements array: " + addElements(objArray));

// let x = "gnirts"
// function reverseElements(s){
//     let h = ""
//     for(i = s.length-1; i>=0; i--){
//         h+= s.charAt(s)
//     }
//     return h
// }

// console.log("reverseString: " + reverseElements(x));



// function returnFn(){
//     return function(){
//         console.log("here")
//     }

// }
//  returnFn()()            //calls function

// let myFn = returnFn();
// myFn();                     //calls function

let add = (a,b) => a + b;

console.log(add(2,3));