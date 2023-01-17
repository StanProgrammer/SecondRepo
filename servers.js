const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone-number');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}-${emailInput.value}-${phoneInput.value}`));
    userList.appendChild(li);
    let myObject={
      name:nameInput.value,
      email:emailInput.value,
      phonenumber:phoneInput.value,
    };
    let myObj=JSON.stringify(myObject)
    let userEmail=String(myObject.email)
    localStorage.setItem(userEmail,myObj)
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

  }

