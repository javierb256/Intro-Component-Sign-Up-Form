const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == ""){
        alert('please fill in every field');
    }
    
})