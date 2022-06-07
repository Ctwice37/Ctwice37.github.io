Array = [{a:3, b:4}, {c:5, d:8}, {e:1, f: 9}, {g:1}]


let zz = {};


let x = function (){ return 22;}
let y = function (){ return 22;}

let z = function (){ return 22;}

zz.a = x();
zz.b = y();
zz.c = z();
zz.d = Array;


module.exports = zz; 




