document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let username = document.querySelector('input[id="usernameReg"]').value;
        let password = document.querySelector('input[id="passwordReg"]').value;
        let confirmPass = document.querySelector('input[id="confirmPass"]').value;
        let inner = document.querySelector('#inner');
        if (password === confirmPass){
            let res = await fetch('/register', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            let response = await res.json();
            inner.innerHTML = `<p style='text-align:center'>${response.answer}</p>`;
        }
        else 
            inner.innerHTML = `<p style='text-align:center'>Confirm password correctly, please </p>`
    })


})