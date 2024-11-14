function validateLogin() {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwsd').value;
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (password === '') {
        errorDiv.textContent = 'Please enter your password.'
        return false;
    } 

    window.location.href = "homepsc.html";
    return true;

}
