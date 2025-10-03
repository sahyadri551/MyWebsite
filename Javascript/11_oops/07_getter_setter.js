class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return `${this._password}smt`
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}

const smt = new User("smt@anc.com","123456abc")
console.log(smt.password);

//-----------------------------------------------------------------
// properties as getter and setter
function User2(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email",{
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email=value
        }
    })

    Object.defineProperty(this, "password",{
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password=value
        }
    })
}
//-------------------------------------------------------------------------------------------
User3={
    _email:"smt@anc.com",
    _password:"123",

    get(){
        return this._email.toUpperCase()
    },

    set(value){
        this._email = value
    }
}

const smt2 = Object.create(User3)
