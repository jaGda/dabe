const saveToLocalStorage = toSave => {
    const toSaveString = JSON.stringify(toSave);
    localStorage.setItem('results', toSaveString);
};

const downloadResultsFromLocalStorage = key => JSON.parse(localStorage.getItem(key));
