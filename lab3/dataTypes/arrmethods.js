// ---------- Part 1: army + filter ----------

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let ageUsers = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 }
];

let soldiers = ageUsers.filter(army.canJoin, army);

alert(soldiers.length);   // 2
alert(soldiers[0].age);   // 20
alert(soldiers[1].age);   // 23



// ---------- Part 2: map -> fullName ----------

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: user.name + " " + user.surname,
  id: user.id
}));

alert(usersMapped[0].id);        // 1
alert(usersMapped[0].fullName); // John Smith
