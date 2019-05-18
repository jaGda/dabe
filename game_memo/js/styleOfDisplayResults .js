const resultsList = document.querySelector("#results");
const span2 = document.getElementsByClassName("close")[1];

span2.onclick = _ => (resultsList.style.display = "none");
window.onclick = event => {
  if (event.target == resultsList) {
    resultsList.style.display = "none";
  }
};
