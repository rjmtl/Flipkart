var obj={
    name:"rajat",
    age:50,
}

console.log(obj.name);
console.log(obj["name"]);

let{name,age}=obj;
console.log(name,age);

obj.name="anmol";
console.log(obj);