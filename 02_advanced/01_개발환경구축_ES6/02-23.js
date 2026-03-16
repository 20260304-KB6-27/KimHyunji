let obj1 = { name:"박문수 ", age:29};
let obj2 = {...obj1, email: "mspark@gmail.com"};

// let obj3 = {...obj1 };
// let obj4 = {...obj1 , email:"mspark@gmail.com" };
// console.log(obj1);
console.log(obj2); 
// console.log(obj3);
// console.log(obj1 == obj2); 
// console.log(obj1 == obj3); 
let arr1 = [ 100, 200, 300 ];
let arr2 = [ "hello",...arr1 , "world"];
console.log(arr1);
console.log(arr2);
