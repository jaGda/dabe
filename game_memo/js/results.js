/*********************************************************** */
const resultsList = document.querySelector('#results');
const span2 = document.getElementsByClassName("close")[1];

span2.onclick = _ => resultsList.style.display = "none";
window.onclick = event => {
    if (event.target == resultsList) {
        resultsList.style.display = "none";
    }
}
/*********************************************************** */
const results = [];

const saveToLocalStorage = toSave => {
    const toSaveString = JSON.stringify(toSave);
    localStorage.setItem('results', toSaveString);
};

const downloadResultsFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

const displayResults = results => {

    const list = [...document.querySelectorAll('li')];
    if (list) {
        list.forEach(e => e.remove());
    } else {
        return;
    };

    const resultsArr = downloadResultsFromLocalStorage('results');
    if (resultsArr) {
        resultsArr.push({
            user: valueInput,
            gameTime: timer.gameTime.toFixed(2)
        });
        results = resultsArr.sort((a, b) => a.gameTime - b.gameTime);
        if (results.length > 5) {
            results.splice(5, 1);
        }
        saveToLocalStorage(results);
    } else {
        results.push({
            user: valueInput,
            gameTime: timer.gameTime.toFixed(2)
        });
        saveToLocalStorage(results);
    }

    results.map(e => {
        const listItem = document.createElement('li');
        listItem.innerText = `${e.user} -> ${e.gameTime}`;
        return listItem;
    }).forEach(e => document.getElementById('results-list').appendChild(e));
}
