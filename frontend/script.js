const username = document.getElementById("username");
const password = document.getElementById("password");
const outPannel = document.getElementById("outPannel");
const adduser = document.getElementById("adduser");
const delUser = document.getElementById("delUser");
const getUsers = document.getElementById("getUsers");
adduser.onclick = () => {
    let options = {
        method: "POST",
        body: JSON.stringify({ username: username.value, password: password.value }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch('/addUser', options)
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
getUsers.onclick = () => {
    fetch('/getAllUsers')
        .then(res => res.json())
        .then(res => {
            outPannel.innerHTML = ""
            res.map((name) => {
                outPannel.innerHTML += `<li>${name}</li>`
            })
        })
        .catch(err => console.log(err));
}
readFile.onclick = () => {
    fetch("/getData")
        .then(res => res.text())
        .then(res => {
            outPannel.innerText = res
        })
        .catch(err => console.log(err));
}
delFile.onclick = () => {
    fetch("/deleteFile", { method: "DELETE" })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
createFile.onclick = () => {
    fetch("/createFile", { method: "POST" })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}