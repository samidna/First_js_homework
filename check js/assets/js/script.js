"use strict";


function checkValue() {
    let email_input = document.getElementById('email_inp');
    let password = document.getElementById('password_inp');
    let email = 'admin@gmail.com';
    let pass = '12345';
    console.log('email_input');
    if (email_input.value == '' || password.value == '') {
        alert('Email or password field is empty');
    }
    else if (email_input.value !== email || password.value !== pass) {
        alert('Email or password is wrong');
    }
    else {
        alert('Welcome to hell :)');
    }
    debugger;
}