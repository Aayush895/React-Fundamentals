export function setLocalStorage(items) {
  localStorage.setItem('list', JSON.stringify(items))
}
