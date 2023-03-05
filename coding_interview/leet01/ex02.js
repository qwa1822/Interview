class MyArray{
  constructor(){
    this.length=0;
    this.data={};
  }

  

  push(item){
    
    this.data[this.length]=item;

    this.length++;
    return this.length;

  }
  pop(){
    const lastIndex=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;

    return lastIndex;

  }

  delete(index){
    const item=this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){

    for(let i=index; i<this.length-1; i++){
      this.data[i]=this.data[i+1];

      console.log(this.data[i],this.data[i+1]);

    }

    delete this.data[this.length-1];
    this.length--;

  }



}


const newArray=new MyArray();
newArray.push('hello')
newArray.push('shift')
newArray.push('shift')
newArray.push('shift')
newArray.push('shift')
newArray.pop();
newArray.delete(0);
newArray.delete(2);



console.log(newArray);