//Todos: price should update on page load (window.onload), best to put code below in a function so onload just
// loads a function, add radio buttons to update currency value.
const btn = document.querySelector("button");
const span = document.getElementById("price");
const currency = "USD";

btn.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            let price = JSON.parse(XHR.responseText);
            span.innerText = price.bpi[currency].rate + " " + currency;
        }
    };
    XHR.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
})