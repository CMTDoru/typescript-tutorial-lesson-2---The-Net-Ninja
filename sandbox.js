"use strict";
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// character = 20; error
// character = 'luigi'
// // age = 'yoshi' error
// age = 40
// // isBlackBelt = 'yes' error
// isBlackBelt = true
// const circ = (diameter: number) => {
//  return diameter * Math.PI
// }
// console.log(circ(7.5))
// ///////////////////////////////////////////////////////
// // arrays
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad')
// // names.push(3) error
// // names[0] = 3 error
// let numbers = [10, 20, 30, 40]
// numbers.push(25)
// // numbers.push('shaun') error
// // number[1] = 'shaun' error
// let mixed = ['ken', 4, 'chun-li', 8, 9]
// mixed.push('ryu');
// mixed.push(20);
// mixed[0] = 3
// //////////////////////////////////////////////////////////
// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// }
// ninja.age = 40;
// ninja.name = 'ryiu'
// // ninja.age = '30' error
// // ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'youshi',
//   belt: 'orange', 
//   age: 40
// } 
/////////////////////////////////////////////////////////
// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// // age = 'luigi' error
// age = 30;
// // isLoggedIn = 25; error
// isLoggedIn = true;
// ///////////////////////////////////////////////////////
// // ARRAYS
// let ninjas: string[] = []
// ninjas.push('shaun')
// // UNION TYPES
// let mixed: (string | number)[] = []
// mixed.push('hello');
// mixed.push(20);
// // mixed.push(true); error
// let uid: string | number 
// uid = '123';
// uid =123;
// // uid = true error
// // OBJECTS
// let ninjaOne: object;
// ninjaOne ={
//   name: 'yoshi',
//   age: 30
// }
// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColour: string
// }
// ninjaTwo = {name: 'Mario', age: 20, beltColour: 'black'}
///////////////////////////////////////////////////////////
// ANY-TYPE
// let age: any = 25;
// age = true;
// console.log(age)
// age = 'hello'
// console.log(age)
// age = {name: 'luigi'}
// console.log(age)
// let mixed: any[] = []
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed)
// let ninja: { name: any, age: any }
// ninja = {name: 'yoshi', age: 25}
// console.log(ninja)
// ninja = {name: 25, age: 'yoshi'}
// console.log(ninja)
//////////////////////////////////////////////////////////
// FUNCTION AND VOID
// let greet = () => {
//     console.log('hello, world'
//     )
// }
// greet = 'hello' // error
// let greet: Function;
// greet = () => {
//     console.log('hello, again')
// }
// // Optional parameter '?'
// const add = (a: number, b: number, c: number | string = 10) => {
//     console.log(a + b)
//     console.log(c)
// }
// add(5, 10)
// // add(5, '10') // error
// const minus = (a: number, b: number): number => {
//     return a + b;
// }
// let result = minus(10, 7)
// result = 'something else'// error
//////////////////////////////////////////////////////////
// Type Aliases
// #1
// const logDetails = ( uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`)
// }
// #2
// type StringOrNum = string | number
// const logDetails = ( uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: {name: string, uid: StringOrNum}) => {
//     console.log(`${user.name} says hello`)
// }
// #3 -  it will reduce code duplication
// type StringOrNum = string | number
// type objWithName = {name:string, uid: StringOrNum}
// const logDetails = ( uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`)
// }
//////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION SIGNATURES
// let greet: Function;
// example 1
// let greet: (a: string, b: string) => void
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`)
// }
// // example 2
// let calc: (a: number, b: number, c: string) => number
// calc = (numberOne: number, numberTwo: number, action: string): number => {
//     if (action === 'add'){
//         return numberOne + numberTwo
//     } else {
//         return numberOne - numberTwo
//     }
// }
// example 3
// #1
// let logDetails: (obj: {name: string, age: number}) => void
// logDetails = (ninja: {name: string, age: number}) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`)
// }
// #2
// let logDetails: (obj: {name: string, age: number}) => void
// type person = {name: string, age: number}
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`)
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
// The DOM & Type Casting
