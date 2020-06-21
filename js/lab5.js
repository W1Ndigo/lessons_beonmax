'use strict'

var arr =[];

let s = prompt('Символ №1');
arr[0] = s;

s = prompt('Символ №2');
arr[1] = s;

s = prompt('Символ №3');
arr[2] = s;

s = prompt('Символ №4');
arr[3] = s;

s = prompt('Символ №5');
arr[4] = s;

s = prompt('Символ №6');
arr[5] = s;

s = prompt('Символ №7');
arr[6] = s;

s = prompt('Символ №8');
arr[7] = s; 
 
for (let i =0; i <arr.length; i++) {

if (arr[i] == '*') {

    alert('Найден знак * под индексом ' + i);
     
} else {
    alert('Знаков * не найдено');
}

}

