//question1

function modifyMyArray(arr){
    for (let i=0; i<arr.length; i++){
        if (i<4){
          arr[i] = arr[i] *arr[i];

        }
        else{
           arr[i] = arr[i] +10
       }

}
    return arr
   }
let numbers=[2,4,6,8,10,12];
let myModifiedArray = modifyMyArray(numbers);
console.log(myModifiedArray);






//question2
let arrNum =[1,2,3,4,5,6,7,8,9];
for (let i=0; i<arrNum.length; i++){
    if (i===4){
        break;
    }
    console.log(arrNum[i])
} 

//question3
function changeFruits(fruits){
    for (i=0; i<fruits.length; i++){
        if(i===2){
            continue;

        }
        console.log(fruits[i]);
    }
}
let fruits= ['apple', 'plum', 'banana','strawberries', 'kiwi'];
changeFruits(fruits);

//question 4
function logArrayElements (arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
let arr = ["melon", "pawpaw", "avocado", "grapes", "dragon fruit", "kiwi"];
logArrayElements(arr);




//question5
function reverseString(word){
    let reverse = '';
    let i = word.length-1;
    while (i>0){
        reverse+= word[i];
        i--;
    }
    return reverse
}

console.log(reverseString("ttravelling"));