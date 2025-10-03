function setUsername(name) {
    this.name = name
}

function createUser(name, email, password) {
    this.email = email
    this.password = password
    setUsername.call(this, name)
}

const user = new createUser("John", "K9TtW@example.com", "123456")
console.log(user.name)