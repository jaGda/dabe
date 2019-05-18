function saveToLocalStorage(toSave) {
  const toSaveString = JSON.stringify(toSave);
  localStorage.setItem("results", toSaveString);
}

function downloadResultsFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
