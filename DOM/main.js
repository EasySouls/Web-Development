document.querySelector("h1").innerHTML = "Good Bye";

var btn0 = document.getElementById("btn0");
btn0.addEventListener("click", function () {
  document.querySelector("ul").lastElementChild.innerHTML = "changed";
});
