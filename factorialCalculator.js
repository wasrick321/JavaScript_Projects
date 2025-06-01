
// This function calculates the factorial of a number using recursion

let no= 3; // Change this value to calculate factorial of a different number

let arr=[];

for(let i=0; i<no;i++){
arr.push(i+1);
}


const red = (a,b)=> {
  return  a * b;
}

// console.log(arr);
console.log(arr.reduce(red));