'use strict';
//Data storage for "userArr" in Local Storage
function saveToStorage(userArr) {
  localStorage.setItem('userArr', JSON.stringify(userArr));
}
function getFromStorage() {
  return localStorage.getItem('userArr')
    ? JSON.parse(localStorage.getItem('userArr'))
    : [];
}