const person={
  name:"lee",
  address:"Seoul",
  __proto__:{age:20}
}


Object.entries(person).forEach(([value,index])=>console.log((value,index)));