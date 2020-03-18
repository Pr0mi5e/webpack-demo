// import _ from 'lodash'
// import './style.css'
import Print from './print'
// import {cube} from "./math";
if(process.env.NODE_ENV !== 'production'){
    console.log('dev')
}

class Cat{
  constructor(){
    // ...
  }
  say(){
    console.log(this);
  }
}


let cat = new Cat();
cat.say.call();  // undefined
cat.say.call(null);  // null
cat.say.call(undefined);  // undefined

function Cat1(){
  // ...
}
Cat1.prototype.say = function () {
  console.log(this);
}

var cat1 = new Cat1();
cat1.say.call();  // Window
cat1.say.call(null);  // Window
cat1.say.call(undefined);  // Window



