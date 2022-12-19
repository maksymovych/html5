//Form variables
const form = document.forms[0];
const email = form.elements["email"];
const password = form.elements["password"];
//Toolbar buttons
const buttons = document.querySelectorAll("button");

//Class Form
class Form {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.onSubmit = this.submitForm.bind(this);
  }

  submitForm() {
    alert(
      `Thank you! Your email: ${this.email.value} was successfully submitted!`
    );
  }
}

//Class Toolbar
class Toolbar {
  constructor(number) {
    this.number = number;
    this.onToolbarClick = this.onClick.bind(this);
  }
  onClick() {
    alert(`You clicked the ${this.number}`);
  }
}

//Adding the event listener on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newForm = new Form(email, password);
  newForm.onSubmit();
});

//adding event listeners on toolbar buttons
for (let btn of buttons) {
  btn.addEventListener("click", (event) => {
    new Toolbar(event.target.innerText).onToolbarClick();
  });
}
