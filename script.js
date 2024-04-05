// console.log('hello');
// var message = 'Hello world';
// var age = 18;
// age = "done";
// console.log(message);

// loosely typed
// strictly typed

// dynamically typed
// statically typed


//hoisting

// function env(){
//     console.log(message)
    
//     var message = "hello";
    
//     console.log(message)
    
//     var message = "else";
    
//     console.log(message)   

//     for(var i = 0; i<5; i++){
//         console.log('__',i);
//     }
//     console.log(i);


// }

// env(); 

// let message ="Hello";

// message ="else";

// console.log(message);  


//CONST
// const message = "Hello";

// console.log(message);

// message ="else";
// console.log(message);

// let userage = 'abcd';
// userage = 'abbd';
// console.log(typeof(userage));

//undefined vs null

// let arr = ['a', 'b', 'c', 'd'];

// arr[0] = 'abcd';
// console.log(arr);

// let str = "12";

//  let age = "20";

// let ans = age -(-str);
// console.log(ans);

// let str = '12';

// let p = parseInt(str);

// let n = Number(str);

// console.log(p, n);

// let str = '12';

// let p = parseInt(str);

// let n = Number(str);

// console.log(p, n);

// let str = '12a';

// let p = parseInt(str);

// let n = Number(str);

// console.log(p, n);

// let a = '12';
// let b = 12;

// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// if(a==b){
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }

// let a =['a','b','c','d'];
// let cpy = a;
// console.log(a,cpy);

// if(a==cpy){
//     console.log('1.yes');
// }
// else{
//     console.log('1.no');
// }

// if(a==cpy){
//     console.log('2.yes');
// }
// else{
//     console.log('2.no');
// }

// let a =['a','b','c','d'];
// let cpy =[...a];

// console.log(a,cpy);

// if(a==cpy){
//     console.log('1.yes');
// }
// else{
//     console.log('1.no');
// }

// if(a==cpy){
//     console.log('2.yes');
// }
// else{
//     console.log('2.no');
// }

// const str = 'khan';

// const usrName = `my name is: `;

// const ans =`${usrName} ${str}`;

// console.log(ans);

// const a = 'my';
// const b = 'name';
// const c = 'is';
// const d = ':';
// const str ='khan';
// const ans =`${a} ${b} ${c} ${d} ${str}`;
// const ans2 =a+ ''+b+''+c+d+''+str;
// console.log(ans);                                                       
// console.log(ans2);  

// function print(str='nothing is here'){
//     console.log(str);
// }

// print();

// let a = null;
// if(a){
//     console.log('yes')
// }
// else{
//     console.log('no');
// }

// function sum(a,b){
//     if(a && b){
//         console.log(a+b);
//     }
//     else
//     console.log(a);
// }

// sum(20);

// print();
// a();
// b();

//function declaration
// function print(){
//     console.log('--');
// }

// function print(){
//     console.log('++');
// }

//function assignment (named)
// const a = function print(){
//     console.log('--');
// }

//function assignment (anonymous)
// const b = function (){
//     console.log('--');
// }

//arrow function assignment
// let c = () =>{
//     console.log('--');
// }

// print();
// a();
// b();
// c();

//written a value from arrow function

// let a = 2;

// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('not 1,2,3');
//     }
// }

// const obj = new Object();
// obj[1] = 'one';
// obj['name'] = 'aarav';
// obj[12] = 'twelve';
// console.log(obj);

// const obj = {
//     1: 'one' ,
//     'firstname': 'aarav',
//     'lastname': 'kaushik',
//     12 : 'twelve',
// };

// const fullname1 = obj.firstname + '' +obj.lastname;
// const fullname2= `${obj.firstname} ${obj.lastname}`;

// console.log(fullname1);
// console.log(fullname2);

// const obj = {
//     'firstname': 'aarav',
//     'lastname': 'kaushik',
//     'age':20,
//     'address': 'delhi',
// };

// const x =prompt('please tell the property to know');
// console.log(obj[x]);
