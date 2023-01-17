const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    let myObject={
      name:nameInput.value,
      email:emailInput.value,
    };
    let myObj=JSON.stringify(myObject)
    localStorage.setItem('myObj',myObj)
    console.log(localStorage)
    nameInput.value = '';
    emailInput.value = '';

  }
}