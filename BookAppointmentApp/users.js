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
  .post('https://crudcrud.com/api/c8273a3d09064b649ea38298e37c03d9/userData',{myObject})
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
            const myarr=a.split('-')
            b=myarr[1]
            axios
            .get('https://crudcrud.com/api/c8273a3d09064b649ea38298e37c03d9/userData')
            .then((res)=>{
              // email id is chosen to fetch _id because email id is unique
              for(i=0;i<res.data.length;i++){
                if(b===res.data[i].myObject.email){
                  res.data[i].myObject
                  a=res.data[i]._id
                  break
                }
              }
              
              axios
              .delete(`https://crudcrud.com/api/c8273a3d09064b649ea38298e37c03d9/userData/${a}`)
              .then((res)=>{
                 itemList.removeChild(li)
              })
              .catch(err=>alert('Not Found'))
            })
            .catch(err=>console.log(err))
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
            phoneInput.value = myArray[2].slice(0,10);
            //a93c3d51e792a360ffc45f7ac418a996326afafc
            var li=e.target.parentElement;
            a=li.textContent
            const myarr=a.split('-')
            b=myarr[1]
            axios
            .get('https://crudcrud.com/api/c8273a3d09064b649ea38298e37c03d9/userData')
            .then((res)=>{
              //email id is chosen to fetch _id because email id is unique
              for(i=0;i<res.data.length;i++){
                if(b===res.data[i].myObject.email){
                  a=res.data[i]._id
                  break
                }
              }
              axios
              .delete(`https://crudcrud.com/api/c8273a3d09064b649ea38298e37c03d9/userData/${a}`)
              .then((res)=>{
                 itemList.removeChild(li)
              })
              .catch(err=>alert('Not Found'))
            })
            .catch(err=>console.log(err))
    }
  }
  window.addEventListener('DOMContentLoaded', (event) => {
    function getTodos() {
    axios
    .get('https://crudcrud.com/api/c8273a3d09064b649ea38298e37c03d9/userData')
    .then(res=>showAll(res))
    .catch(err=>console.log(err))
  }
  getTodos()
  })
  function showAll(res){
    for(i=0;i<res.data.length;i++){
      show1(res.data[i].myObject,res.data[i]._id)
    }
  }
  function show1(res,id) {
    // console.log(id)
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
  
  

