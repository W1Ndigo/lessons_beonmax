'use strict'

let q = prompt('x=');

let x = parseInt(q);

q = prompt('y=');

let y = parseInt(q);

let i = (x*y / (x-y));

let i2 = Math.sqrt(Math.abs(Math.pow(y,3)-x));

let z = i + i2;

q = 'z = '+z;

alert(q); 


