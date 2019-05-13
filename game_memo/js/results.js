const results = [[], []];
const resultsArr = downloadResultsFromLocalStorage("results");

const displayResultsHardLevel = _ => {
  if (resultsArr === null) {
    results[1].push({
      user: valueInput,
      gameTime: timer.gameTime.toFixed(2)
    });
    saveToLocalStorage(results);
    results[1]
      .map(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.user} -> ${item.gameTime}`;
        return listItem;
      })
      .forEach(item =>
        document.getElementById("results-list_hard").appendChild(item)
      );
  } else {
    resultsArr[1].push({
      user: valueInput,
      gameTime: timer.gameTime.toFixed(2)
    });
    resultsArr[1].sort((a, b) => a.gameTime - b.gameTime);
    if (resultsArr[1].length > 5) {
      resultsArr[1].splice(5, 1);
    }
    saveToLocalStorage(resultsArr);
    if (resultsArr[0]) {
      resultsArr[0]
        .map(item => {
          const listItem = document.createElement("li");
          listItem.innerText = `${item.user} -> ${item.gameTime}`;
          return listItem;
        })
        .forEach(item =>
          document.getElementById("results-list_easy").appendChild(item)
        );
    }
    resultsArr[1]
      .map(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.user} -> ${item.gameTime}`;
        return listItem;
      })
      .forEach(item =>
        document.getElementById("results-list_hard").appendChild(item)
      );
  }
};

const displayResultsEasyLevel = _ => {
  if (resultsArr === null) {
    results[0].push({
      user: valueInput,
      gameTime: timer.gameTime.toFixed(2)
    });
    saveToLocalStorage(results);
    results[0]
      .map(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.user} -> ${item.gameTime}`;
        return listItem;
      })
      .forEach(item =>
        document.getElementById("results-list_easy").appendChild(item)
      );
  } else {
    resultsArr[0].push({
      user: valueInput,
      gameTime: timer.gameTime.toFixed(2)
    });
    resultsArr[0].sort((a, b) => a.gameTime - b.gameTime);
    if (resultsArr[0].length > 5) {
      resultsArr[0].splice(5, 1);
    }
    saveToLocalStorage(resultsArr);
    if (resultsArr[1]) {
      resultsArr[1]
        .map(item => {
          const listItem = document.createElement("li");
          listItem.innerText = `${item.user} -> ${item.gameTime}`;
          return listItem;
        })
        .forEach(item =>
          document.getElementById("results-list_hard").appendChild(item)
        );
    }
    resultsArr[0]
      .map(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.user} -> ${item.gameTime}`;
        return listItem;
      })
      .forEach(item =>
        document.getElementById("results-list_easy").appendChild(item)
      );
  }
};
