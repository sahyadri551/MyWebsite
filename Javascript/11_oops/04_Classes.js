//ES6

class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    greet(){
        console.log(`Hello, ${this.name}!`);
    }

    encryptPassword(){
        this.password = this.password.split("").reverse().join("");
        return this.password
    }

    decryptPassword(){
        this.password = this.password.split("").reverse().join("");
        return this.password
    }
}

const user = new User("John", "K9TtW@example.com", "123456");

user.greet();
console.log(user.encryptPassword());
console.log(user.decryptPassword());

// same thing -> behind the scenes
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  
  User.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
  
  User.prototype.encryptPassword = function() {
    this.password = this.password.split("").reverse().join("");
    return this.password;
  };
  
  User.prototype.decryptPassword = function() {
    this.password = this.password.split("").reverse().join("");
    return this.password;
  };

  const user2 = new User("John", "K9TtW@example.com", "123456");
  
  user2.greet();
  console.log(user2.encryptPassword());
  console.log(user2.decryptPassword());

  // class inheritance
  class AdminUser extends User {
    constructor(name, email, password, admin) {
      super(name, email, password);
      this.admin = admin;
    }
  } 
  
  const adminUser = new AdminUser("John", "K9TtW@example.com", "123456", true);
  
  adminUser.greet();
  console.log(adminUser.encryptPassword());
  console.log(adminUser.decryptPassword());

  // static method
  class Teacher {
    constructor(name, email, password, subject) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.subject = subject;
    }
  
    help(teacher) {
      console.log(`Helping ${teacher.name} with ${teacher.subject}`);
    }

    static createId() { // static, can't be called from instance or inherited
        this.id = Math.floor(Math.random() * 1000);
        return this.id
      }
  } 