let url = "https://randomuser.me/api/";
let fullNameDisplay = document.querySelector("#fullname");
let btn = document.getElementById("btn");
let avatar = document.querySelector("#avatar");
let username = document.querySelector("#username");
let city = document.querySelector("#city");
let email = document.querySelector("#email");
btn.addEventListener("click", function () {

    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors)
});

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json().then(function (parsedData) {
        return parsedData.results[0];
    });
}

function updateProfile(data) {
    let fullname = data.name.first + " " + data.name.last
    fullNameDisplay.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors(err) {
    console.log("Inside display errors function");
    console.log(err);
}