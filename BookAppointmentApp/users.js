const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone-number');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
    let myObject={
      name:nameInput.value,
      email:emailInput.value,
      phonenumber:phoneInput.value,
    };
    axios
  .post('https://crudcrud.com/api/b37c094a13234c048c8d2b69940c6d58/userData',{myObject})
  .then(res=>show1(myObject))
  .catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>Something went Wrong<h4>"
    console.log(err)
  })
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

  }

  var itemList=document.getElementById('users')
  itemList.addEventListener('click',deleteItem)
  function deleteItem(e){
    if(e.target.value==='Delete'){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            a=li.textContent
            const myArray=a.split('-')
            localStorage.removeItem(myArray[1]);
            itemList.removeChild(li)
        }
    }
  }
  itemList.addEventListener('click',editItem)
  function editItem(e){
    if(e.target.value==='Edit'){
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
  window.addEventListener('DOMContentLoaded', (event) => {
    function getTodos() {
    axios
    .get('https://crudcrud.com/api/b37c094a13234c048c8d2b69940c6d58/userData')
    .then(res=>showAll(res))
    .catch(err=>console.log(err))
  }
  getTodos()
  })
  function showAll(res){
    for(i=0;i<res.data.length;i++){
      show1(res.data[i].myObject)
    }
  }
  function show1(res) {
    const li = document.createElement('li');
    const btn=document.createElement('input')
    btn.value='Delete';
    btn.type='button'
    btn.appendChild(document.createTextNode('delete'))

    const edit=document.createElement('input')
    edit.value='Edit';
    edit.type='button'
    edit.appendChild(document.createTextNode('edit'))
    li.appendChild(document.createTextNode(`${res.name}-${res.email}-${res.phonenumber}`));
    userList.appendChild(li);
    li.appendChild(btn);
    li.appendChild(edit);
  }
  