
// 6.2
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let suma = 0;
for (let key in salaries) {
  suma += salaries[key];
}
console.log("Totalul salariului este: ", suma)

// 6.5
let user = {     
  name:'person',  
  age: 123,
  salary: 1542.33,
  contacts:{
    phone: '112',
    email:'victor.ponomarciuc@gmail.com',
  } ,
  address:'Moldova'       
};
user.contacts.phone = '+37360553564',
user.address = null,
console.log(user)
