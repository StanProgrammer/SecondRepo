const form = document.getElementById("myForm");
const peopleList = document.getElementById("users");
async function getAllUsers() {
    try {
        const peopleList = document.getElementById("users");
        const res = await axios.get('http://localhost:3000/getUsers');
        res.data.forEach(user => {
            const li = document.createElement("li");
            li.classList.add("list-group-item", "list-group-item-warning");
            li.appendChild(document.createTextNode(`${user.name} ${user.phoneno} ${user.email}`));
            const editButton = document.createElement("button");
            const deleteButton = document.createElement("button");
            editButton.innerHTML = "edit";
            deleteButton.innerHTML = "delete";
            editButton.classList.add("btn", "btn-outline-success", "btn-sm");
            deleteButton.classList.add("delete", "btn", "btn-outline-danger", "btn-sm");
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            peopleList.appendChild(li);
        });
    }
    catch (err) {
        console.log(err);
    }
}

async function createUser(e) {
    try {
        //e.preventDefault();
        const name = document.getElementById("name").value;
        const phoneno = document.getElementById("phoneno").value;
        const email = document.getElementById("email").value;
        const user = { name, phoneno, email };
        console.log(user);
        const res = await axios.post('http://localhost:3000/users/createUser', {
            name: name,
            phoneno: phoneno,
            email: email
        });
        console.log(res.data);
        window.location.reload();
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteUser(e) {
    try {
        if (e.target.classList.contains('delete')) {
            let id;
            let userdata = e.target.parentNode.firstChild.wholeText.split(" ");
            const phoneno = userdata[userdata.length - 2];
            const email = userdata[userdata.length - 1];
            const userInfo = { phoneno, email };
            const res = await axios.get(`http://localhost:3000/getUsers`);
            res.data.forEach(user => {
                if (user.phoneno === phoneno && user.email === email) {
                    console.log(user);
                    id = user.id;
                }
            })
            const deleteUser = await axios.get('http://localhost:3000/deleteUser', {
                params: {
                    id: id
                }
            });
            window.location.reload();
        }
    }
    catch (err) {
        console.log(err);
    }
}

document.addEventListener('DOMContentLoaded', getAllUsers);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser(e);
});

peopleList.addEventListener('click', (e) => {
    deleteUser(e);
})
