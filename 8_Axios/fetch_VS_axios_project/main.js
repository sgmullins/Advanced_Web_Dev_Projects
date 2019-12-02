var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let display = document.querySelector("#quote");
let fetchbtn = document.querySelector("#fetch");
let axiosbtn = document.querySelector("#axios");

fetchbtn.addEventListener("click", function () {
    fetch(url)
        .then(function (req) {
            req.json().then(function (data) {
                display.innerText = data[0];
            })
        })
        .catch(function () {
            alert("error");
        })
});

axiosbtn.addEventListener("click", function () {
    axios.get(url)
        .then(function (res) {
            display.innerText = res.data[0];
        })
        .catch(function () {
            alert("error")
        });
})