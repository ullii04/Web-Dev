let user= {
    name:"john",
    age: 30,
    isAdmin: true
};
console.log(user.name);
console.log(user.age);

//in html 
// let key=prompt("what do you whant to about the user?", "name");
// alert(user[key]);

let key= 'name';
console.log(user.key);


//makeuser
function makeUser(name,age){
    return {
        name: name,
        age: age
    };
}
let User=makeUser('Denny', 78);
console.log(User);


//
let obj={
    for:1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let + obj.return);



// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}