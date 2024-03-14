const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');
const errors = document.querySelector('.hidden');
const emailError = document.querySelector(".emailError");
const inputsArray = document.querySelectorAll('input');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == ""){
        errors.classList.remove("hidden");
    }

    if(firstName.value != "" && lastName.value != "" && email.value != "" && password.value != ""){
        errors.classList.add("hidden");
    }

    if(firstName.value == "") {
        firstName.classList.add("errorBorder");
    }
    if(lastName.value == "") {
        lastName.classList.add("errorBorder");
    }
    if(email.value == "") {
        email.classList.add("errorBorder");
    }
    if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false){
        email.classList.add("errorBorder");
    }
    if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == true){
        emailError.classList.add("hidden");
    }
    if(password.value == "") {
        password.classList.add("errorBorder");
    }

    
})

inputsArray.forEach(input => {
    input.addEventListener('keydown', ()=>{
        if(input.classList == 'errorBorder'){
            input.classList.toggle('errorBorder');
        }

    })
})