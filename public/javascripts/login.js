document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let username = document.querySelector('input[id="usernameLogin"]').value
        let password = document.querySelector('input[id="passwordLogin"]').value
        let inner = document.querySelector('#inner');
        let res = await fetch('/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        let response = await res.json();
        if(response.answer){
            inner.innerHTML = `<p style='text-align:center'>${response.answer}</p>`
        }

    })
})