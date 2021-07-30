fetch('https://warm-ocean-75768.herokuapp.com/get-blogs/')
.then(response => response.json())
.then(data => console.log(data))