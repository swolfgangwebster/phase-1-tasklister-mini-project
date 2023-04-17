document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let task = e.target.ntd.value
    e.target.ntd.value = ""
    let p = document.createElement('p')
    p.textContent = task
    document.querySelector('#tasks').appendChild(p)
  })
});
