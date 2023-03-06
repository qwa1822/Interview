class AgedPerson{



  constructor(){
    console.log(this.name);
  }
  printAge(){
    console.log(this.age);
  }
}


class Person extends AgedPerson{
  name="MAX";

  constructor(){
    super();
    this.age=30;
  }

  greet(){
    console.log("Hi, I AM "+this.name+"and i am "+this.age+"years old");
  }
}



// const person=new Person();
// console.log(person.greet());



// function Person(){

//   this.age=30;
//   this.name='max';
//   this.greet=function(){
//     console.log("Hi, I AM "+this.name+"and i am "+this.age+"years old");
//   }

// }

// Person.prototype={
//   printAll(){
//     console.log(this.age);
//   }
// }

// Person.describe=function(){
//   console.log('log descritwe');
// }

// const p=new Person();
// p.printAll();


// console.log(p.__proto__);
// console.log(Object);



const course={
  title:"Javascript-The Complete Guide",
  rating:5
};   // new Object();



// console.log(course.__proto__);

Object.setPrototypeOf(course,{
  ...Object.getPrototypeOf(course),
  printRating:function(){
    console.log(`${this.rating}/5`);
  }
})


course.printRating();
// course.printRating();



