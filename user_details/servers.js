const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone-number');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
    const li = document.createElement('li');
    const btn=document.createElement('input')
    btn.value='Delete';
    btn.type='button'
    btn.appendChild(document.createTextNode('delete'))

    const edit=document.createElement('input')
    edit.value='Edit';
    edit.type='button'
    edit.appendChild(document.createTextNode('edit'))
    

    
    li.appendChild(document.createTextNode(`${nameInput.value}-${emailInput.value}-${phoneInput.value}`));
    userList.appendChild(li);
    li.appendChild(btn);
    li.appendChild(edit);
    

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

  var itemList=document.getElementById('users')
  itemList.addEventListener('click',removeItem)
  function removeItem(e){
    if(e.target.value==='Delete'){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            a=li.textContent
            const myArray=a.split('-')
            localStorage.removeItem(myArray[1]);
            itemList.removeChild(li)
        }
    }
    else if(e.target.value==='Edit'){
      var li=e.target.parentElement;
            a=li.textContent
            const myArray=a.split('-')
            nameInput.value = myArray[0];
            emailInput.value = myArray[1];
            phoneInput.value = myArray[2];
            localStorage.removeItem(myArray[1]);
            itemList.removeChild(li)

    }
}

