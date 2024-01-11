let login_obj = document.getElementById('login_box')
login_obj.addEventListener('click', validateLoginForm)



function validateEmail(email) {
    //regular expression to check if the email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Customize these rules to match your password requirements
    const minLength = 5;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    );
}


// validation login 

function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById('email_box');
    const password = document.getElementById('password_box');

    // Validate email
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    if (!validatePassword(password.value)) {
        alert('Please enter a valid password.');
        return;
    }

    if (email.value === 'Brindha@gmail.com' && password.value === "Brindha") {
        alert('Login successful!');
        window.location.href = 'home_page/index.html';
    }
    else {
        alert('Give valid Username and Password');
    }


}