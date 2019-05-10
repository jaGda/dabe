let valueInput;

const startInit = _ => {
    document.getElementById("userName").style.display = 'none';
    init();
    timer.start();
};

document.getElementById("start").onclick = _ => {
    valueInput = document.getElementById("userNameInput").value;
    valueInput ? startInit() : alert("Username is required.");
};

document.getElementById("pause").onclick = _ => {
    timer.stop();
    cards.forEach(card => card.removeEventListener("click", clickCard));
}

document.getElementById("return").onclick = _ => {
    timer.start();
    cards.forEach(card => card.addEventListener("click", clickCard));
}

document.getElementById("restart").addEventListener("click", () => location.reload());

