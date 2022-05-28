let array2 = [234,234,2355,56534]

let arrayOBJ = {a:4, b:2, c:4};
 
// for(let element in array2){
//     console.log(element);
// }


// for(let key in arrayOBJ){
//     console.log(key, OBJ[key]);
// }



let ss = function(s){
    let x = [];

    for(let key in s){
        x.push(key)
    }
    return x
}


console.log(ss(arrayOBJ));