var prevent = document.querySelector('.signup');
prevent.addEventListener('click', (e) => {
    if(!regValidate()) {
        e.preventDefault();
    }
});

// ERROR DISPLAY
let err = document.querySelector('.error');
let nameErr = document.querySelector('.nameErr');
let emailErr = document.querySelector('.emailErr');
let branchErr = document.querySelector('.branchErr');
let workidErr = document.querySelector('.workidErr');
let deptErr = document.querySelector('.deptErr');


function regValidate() {
    // VARIABLES TO ACCESS THE FORM
    let empname = document.getElementById('name');
    let nameVal = empname.value;

    let mail = document.getElementById('email');
    let mailVal = mail.value;

    let branch = document.getElementById('branch');
    let branchVal = branch.options[branch.selectedIndex].value;

    let workid = document.getElementById('workid');
    let workidVal = workid.value;

    let dept = document.getElementById('dept');
    let deptVal = dept.options[dept.selectedIndex].value;

    // REGEX TO VALIDATE MAIL AND NUMBER
    let emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|in|net|org)$/; // MAIL VALIDATION - CORRECT MAIL FORMAT

    // VALIDATE EMPTY FIELDS
    if (nameVal === '' || mailVal === '' || branchVal === '0' || workidVal === '' || deptVal === '0') {
        err.innerText = "Please fill all the mandatory fields!";
        return false //PREVENT FORM SUBMISSION
    }
    
    else {
        err.innerText = "";
    }
    // console.log("Working");
    
    // VALIDATE EMAIL
    if (nameVal !== '' || mailVal !== '' || branchVal !== '0' || workidVal !== '' || deptVal !== '0') {
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
    }
    window.location.href = "Login.html";
}
