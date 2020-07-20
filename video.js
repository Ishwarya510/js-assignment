var num=[12,14,16,18,30,24];
res=num.filter(num=>num>=14);
console.log(res);// [14, 16, 18, 30, 24]

var str="hello world!";
res=str.split('');
console.log(res);//["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

var fruits=["apple","orange","Pear","Grape","papaya"];
fruits.splice(2,0,"lemon","banana");
console.log(fruits);//["apple", "orange", "lemon", "banana", "Pear", "Grape", "papaya"]

let cars=["volve","acura","honda","lexus"];
res=cars.join(';');
console.log(res);//volve;acura;honda;lexus

const birds=["sparrow","eagle","pigeon","crow"]
for (const ele of birds) {
 console.log(ele);
}/*sparrow
 eagle
 pigeon
 crow*/

 const birds=["sparrow","eagle","pigeon","crow"];
 birds.forEach(element => console.log(element));
 /*sparrow
   eagle
  pigeon
  crow*/
 

const person={
street:"mgroad",
name:"ishwarya",
age:20,
};
function  showData(x){
  console.log(x);
}
showData(person);// { street:"mgroad",name:"ishwarya", age:20,};

const another={...person};
console.log(another); // { street:"mgroad",name:"ishwarya", age:20,};

for(let key in person){
 console.log(key);
}// { street:"mgroad",name:"ishwarya", age:20,};

const values=Object.values(person);
console.log(values);//["mgroad","ishwarya",20]

const keys=Object.keys(person);
console.log(keys);//["street","name","age"]

