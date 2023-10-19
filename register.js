var prevent = document.querySelector('.signup');
prevent.addEventListener('click', (e) => {
    if(!regValidate()) {
        e.preventDefault();
    }
});

// ERROR DISPLAY
let err = document.querySelector('.error');
let emailErr = document.querySelector('.emailErr');
let pwdErr = document.querySelector('.pwdErr');
let cnfpwdErr = document.querySelector('.cnfpwdErr');


function regValidate() {
    // VARIABLES TO ACCESS THE FORM
    let empname = document.getElementById('name');
    let nameVal = empname.value;

    let mail = document.getElementById('email');
    let mailVal = mail.value;

    let pwd = document.getElementById('pwd');
    let pwdVal = pwd.value;

    let cnfpwd = document.getElementById('cnfpwd');
    let cnfpwdVal = cnfpwd.value;

    let workid = document.getElementById('workid');
    let workidVal = workid.value;

    let dept = document.getElementById('dept');
    let deptVal = dept.options[dept.selectedIndex].value;

    // REGEX TO VALIDATE MAIL AND NUMBER
    let emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|in|net|org)$/; // MAIL VALIDATION - CORRECT MAIL FORMAT

    // REGEX TO VALIDATE PASSWORD
    let uppercaseRegex = /[A-Z]/; //  MUST HAVE AT LEAST ONE UPPERCASE CHARACTER FROM A-Z
    let specialCharRegex = /[!@#$%^&*()]/; // MUST HAVE AT LEAST ONE SPECIAL CHARACTER
    let minlengthRegex = /.{8,}/; // MUST HAVE MINIMUM LENGTH OF 8

    // VALIDATE EMPTY FIELDS
    if (nameVal === '' || mailVal === '' || pwdVal === '' || cnfpwd === '' ||workidVal === '' || deptVal === '0') {
        err.innerText = "Please fill all the fields!";
        return false //PREVENT FORM SUBMISSION
    }
    
    else {
        err.innerText = "";
    }
    // console.log("Working");

    if (nameVal !== '' || mailVal !== '' || pwdVal !== '' || cnfpwdVal !== '' || workidVal !== '' || deptVal !== '0') {
        // VALIDATE EMAIL
        if (!emailRegex.test(mailVal)) {
            mail.style.border = "2px solid red";
            emailErr.innerText = "Please enter a valid email!";
            return false
        }

        else {
            mail.style.border = "";
            emailErr.innerText = "";
        }

        // VALIDATE PASSWORD
        switch (true) {
        case !minlengthRegex.test(pwdVal):
            pwd.style.border = '2px solid red';
            pwdErr.innerText = "The password must have at least 8 characters!";
            return false; // PREVENT FORM SUBMISSION
        case !uppercaseRegex.test(pwdVal):
            pwd.style.border = '2px solid red';
            pwdErr.innerText = "The password must contain at least one uppercase character!";
            return false; // PREVENT FORM SUBMISSION
        case !specialCharRegex.test(pwdVal):
            pwd.style.border = '2px solid red';
            pwdErr.innerText = "The password must contain at least one special character in it!";
            return false; // PREVENT FORM SUBMISSION
        default:
            pwdErr.innerText = '';
            pwd.style.border = '1.8px solid white';
}

        //VALIDATE CONFIRM PASSWORD
        if (pwdVal !== cnfpwdVal) {
            cnfpwdErr.innerText = 'Passwords do not match';
            cnfpwd.style.border = "2px solid red";
            pwd.style.border = "2px solid red";
            return false
        }
    }


    window.location.reload
    window.location.href = "Login.html";

}
