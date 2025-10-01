class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUser(id);

  let name = "Guest";
  if (user != null && user.name != null) name = user.name;
  console.log("Hello " + name);

  if(user != null && user.hasAccess != null && user.hasAccess()){
    console.log('You have access');
  } else {
    console.log(`You don't have access`);
  }
}
