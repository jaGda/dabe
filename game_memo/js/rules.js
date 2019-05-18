const modal = document.getElementById("modal");
const btn = document.getElementById("rules");
const span1 = document.getElementsByClassName("close")[0];

btn.onclick = _ => (modal.style.display = "flex");
span1.onclick = _ => (modal.style.display = "none");

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
