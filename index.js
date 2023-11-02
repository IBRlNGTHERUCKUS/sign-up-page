let password=document.querySelector('#password');
let confirmPassword=document.querySelector('#confirm-password');
let passwordMismatch=document.querySelector('.password-mismatch')

password.setAttribute('type', 'text');
confirmPassword.setAttribute('type', 'text');

function checkMatch(){
    if (password.value!=confirmPassword.value) {
        confirmPassword.classList.add('mismatch')
        password.classList.add('mismatch');
        passwordMismatch.style.display='block';
    }
    else if (password.value==confirmPassword.value) {
        confirmPassword.classList.remove('mismatch')
        password.classList.remove('mismatch');
        passwordMismatch.style.display='none';
    }
}

confirmPassword.addEventListener('keydown', ()=>{setTimeout(checkMatch, 100)});
password.addEventListener('keydown', ()=>{setTimeout(checkMatch, 100)});