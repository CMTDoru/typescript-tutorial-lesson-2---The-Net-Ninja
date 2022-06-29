'use strict';
import { Invoice } from "./classes/Invoice.js";
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'pluming work', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo)
// console.log(docs)
//  we are using module sistem
///////////////////////////////////////////////////////////////////////
// Interfaces (ne permite sa folosim o structura de tip in clasa sau obiecte in js)
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void
//     spend(a: number): number
// }
// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log(`I spent`, amount);
//         return amount;
//     }
//     // skill: []// error 
// }
// let someone: IsPerson
// const greetPerson = (person: IsPerson) => {
// console.log('hello ', person.name)
// }
// // greetPerson({name: 'shaun'}) // error if we use strict mode
// greetPerson(me)
// console.log(me)
////////////////////////////////////////////////////////////////////////////
// Interfaces with clases
// Clases ( is a blueprint for an object )
// class Invoice {
//     readonly client: string; // we can acces it but we can not modifie it ( its a soft readonly )
//     private details: string; // makeing it private in the globl object, we can acces it via de format 
//     public amount: number; // making it public
//     constructor(c: string, d: string, a: number) {
//         this.client = c
//         this.details = d
//         this.amount = a
//     }
//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}`
//     }
// }
// New version
// class Invoice {
//     constructor(
//         // varianta asta merge numai daca avem acces modifiers legata de propietati,
//         // daca nu sunt declarate atunci trebuie facuta variata de mai sus
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) {
//     }
//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}`
//     }
// }
// if we want to create an object based of this class
// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)
// // console.log(invOne, invTwo)
// // let invoices:string[] = []
// let invoices:Invoice[] = []
// // invoices.push('Hello')// error
// // invoices.push({name: 'shaun'})// error
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices)
// // invOne.client = 'yoshi'; // now we get a error because we added readonly to client
// invTwo.amount = 400
// // cand nu vrem sa permitem accesul si modificare valorilor
// // Acces modifiers, Pubplic, Private & Readonly
// // how to cycle to invoice using forEach loop
// invoices.forEach( inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
// The DOM & Type Casting
// const anchor = document.querySelector('a')
// // console.log(anchor.href)// error
// if(anchor) {
//     console.log(anchor.href)
// }
// typescript provides us with a simpler solution
// The '!' definite assigment assertion operator
// const anchor = document.querySelector('a')!
// console.log(anchor.href)
// example
// const form = document.querySelector('form')!
// we are going to use type casting
// const form = document.querySelector('.new-item-form') as HTMLFormElement
// // console.log(form.children)
// // inputs
// const type = document.querySelector('#type') as HTMLSelectElement
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement
// const details = document.querySelector('#details') as HTMLInputElement
// const amount = document.querySelector('#amount') as HTMLInputElement
// form.addEventListener('submit', (e: Event) =>{
//     e.preventDefault();
//     // Java script automatic transforms a number from input into a string, to combat this add AsNumber
//     console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
// })
////////////////////////////////////////////////////////////////////////////////////
// GENERICS ( alows us to create reusable blocks of code)
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100)
//     return {...obj, uid}
// }
// let docOne = addUID({name: 'yoshi', age: 40})
// console.log(docOne)
// // Cand vrem sa accesam o propietate ca name nu o sa ne permita
// // asta pentru ca nu am specificat in functie ca name exista si nu este capturata in functie
// // functia nu stie ce returneaza
// console.log(docOne.name)
/////////////////////////////////////// noua varianta
// varianta: <T extends object> sau daca vrem sa fim si mai specifici <T extends {name: string}
// (specificam ca obiectul trebuie sa contina propietatea name)
// const addUID = <T extends {name: string}>(obj: T) => {
//     // T captureaza ce propietati intra in obiect
//     let uid = Math.floor(Math.random() * 100)
//     return {...obj, uid}
// }
// let docOne = addUID({name: 'yoshi', age: 40})
/// putem spune
// let docTwo = addUID('hello')// ni se permite acum pentru ca nu am specificat T-ul cu extindere
// console.log(docOne)
// Cand vrem sa accesam o propietate ca name nu o sa ne permita
// asta pentru ca nu am specificat in functie ca name exista si nu este capturata in functie
// functia nu stie ce returneaza
// console.log(docOne.name) // acum ne permite sa vedem propietatea name
// We will extend Generics with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T; // specificam ca data va avea tipul T care este definit cand se foloseste tipul resource in definirea unui obiect.
// } // (defineste cum trebuie sa arate un obiect)
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'Shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
////////////////////////////////////////////////////////////////////////////////////
// Special types - ENUMS (pentru a specifica constante descriptive)
// defapt se creaza un array cu urmatoarele propietati si vai putea folosi propietatea fara stii numarul de index,
// dar in js va aparea numarul de index
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(docOne, docTwo);
////////////////////////////////////////////////////////////////////////////////////
// TUPLES (sunt ca array dar este o diferenta majora, tipul de date este fix dupa ce este initializat)
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
// Asa definim un tuple
let tup = ['hello', 40, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
student = ['chun-li', 223423];
// student = [23432432, 'chun-li'] // eroor
////////////////////////////////////////////////////////////////////////////////////
// App coding start
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    // Primul lucru pe care vrem sa il face este sa verificam tipul (invoice/payment)
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
