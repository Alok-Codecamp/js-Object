// using object literal
const student={name:'sakib',job:'cricketer'};

//object constructor
const person=new Object();
// console.log(person)

//
const human=Object.create(null)
const human=Object.create(student)

// console.log(human.job)

// class
class People{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
// const peop=new People('manus',12);
// console.log(peop)

//function

// function manus(name){
    // this.name=name;

// }
// const man=new manus('kader')
// console.log(man)