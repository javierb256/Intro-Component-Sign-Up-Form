const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');
const errors = document.querySelector('.hidden');

// fix buttons staying red after clicking button
// add email validation

button.addEventListener('click', (e)=> {
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == ""){
        errors.classList.toggle("hidden");
    }

    if(firstName.value == "") {
        firstName.classList.toggle("errorBorder");
    }
    if(lastName.value == "") {
        lastName.classList.toggle("errorBorder");
    }
    if(email.value == "") {
        email.classList.toggle("errorBorder");
    }
    if(password.value == "") {
        password.classList.toggle("errorBorder")
    }

    else {
        firstName
    }
    
})