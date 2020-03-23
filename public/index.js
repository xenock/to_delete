const url = 'http://localhost:3000/data'
fetch(url).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});