const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');
const error = document.querySelector('.error');
const emailError = document.querySelector(".emailError");
const inputsArray = document.querySelectorAll('input');

firstName.value = ""
lastName.value = ""
email.value = ""
password.value = ""
emailError.style.display = "none"

button.addEventListener('click', (e)=> {
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == ""){
        error.style.display= "block";
    }

    if(firstName.value != "" && lastName.value != "" && email.value != "" && password.value != ""){
        error.style.display = "none";
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
        emailError.style.display="block";
        email.classList.add("errorBorder");
    }
    if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == true){
        emailError.style.display = "none";
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