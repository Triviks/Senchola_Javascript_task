// ERROR DISPLAY
let err = document.querySelector('.error');
let nameErr = document.querySelector('.nameErr');
let emailErr = document.querySelector('.emailErr');
let branchErr = document.querySelector('.branchErr');
let workidErr = document.querySelector('.workidErr');
let deptErr = document.querySelector('.deptErr');

var prevent = document.querySelector('.login');
prevent.addEventListener('click', (e) => {
    if(!logValidate()) {
        e.preventDefault();
    }
});

function logValidate () {
    // VARIABLES TO ACCESS THE FORM
    let workid = document.getElementById('workid');
    let workidVal = workid.value;

    let pwd = document.getElementById('pwd');
    let pwdVal = pwd.value;
    console.log("log Working");

    // VALIDATE EMPTY FIELDS
    if (workidVal === '' || pwdVal === '') {
        err.innerText = "Please fill all the fields!";
        return false
    }

    else {
        err.innerText = "";
    }

    window.location.href = 'to-do.html';
}
