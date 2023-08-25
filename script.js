const password = document.querySelector("#password")
const conPassword = document.querySelector("#con_password")
const button = document.querySelector("#submit")
const warning = document.querySelector(".warning")

    conPassword.addEventListener('input', (event) => {
        if (password.value != conPassword.value){
            warning.textContent = "Passwords don't match!"; 
            conPassword.classList.add("invalid");
            password.classList.add("invalid");

        } else if (password.value == conPassword.value){
            warning.textContent = ""; 
            conPassword.classList.remove("invalid");
            password.classList.remove("invalid");
        }
    })

