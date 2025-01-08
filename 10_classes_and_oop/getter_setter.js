class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase();
  }
  set email(value){
    this._email = value.toLowerCase();
  }
  get password() {
    return `${this._password}bhavik`;
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const bhavik = new User("bhavi@gmail.com", "abc123");
console.log(bhavik.password);
console.log(bhavik.email);
