fetch('https://warm-ocean-75768.herokuapp.com/get-blogs/')
.then(response => response.json())
.then(data => console.log(data))

const token = 'YOUR_TOKEN_HERE';
fetch('https://warm-ocean-75768.herokuapp.com/auth', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({"username":"zozo", "password":"ronbon"})
}).then(res => res.json())
.then(res => console.log(res));