/* principle ideia is to simplify the contructor,
not necessary to know the order of each parameter.*/

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

// traditional way
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

let user = new UserBuilder("Bob")
  .setAge(21)
  .setPhone('4567895678')
  .build();

console.log(user);

// JS focus 
class UserBuilderJS {
  constructor (name, {age, phone, address} = {}) {
    this.name = name; 
    this.age = age;
    this.phone = phone;
    this.address = address;
  }

  getUser () {
    return [this.name, this.phone, this.age, this.address.zip, this.address.street];
  }
}

let newUser = new UserBuilderJS('Bob', {age: 21, phone: '4567-4567', address: new Address('34', 'LA')});

console.log(newUser);
console.log(newUser.getUser());
