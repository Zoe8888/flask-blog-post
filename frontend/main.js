fetch('https://warm-ocean-75768.herokuapp.com/')
.then(response => response.json())
.then(data => {
console.log(data)})