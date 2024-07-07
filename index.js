var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopbutton = document.querySelector(".add-button");

addpopbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdiscriptioninput = document.getElementById("book-discription-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-conatiner");
  div.innerHTML = `<h1>${booktitleinput.value}</h1>
  <h2>${bookauthorinput.value}</h2>
  <p>${bookdiscriptioninput.value}</p>
  <button onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
