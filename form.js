let signUpBtn = document.querySelector('.signupbtn')
let signInBtn = document.querySelector('.signinbtn')
let nameF = document.querySelector('.inputttt')
let signuph = document.querySelector('.signuph')
let underline = document.querySelector('.underline')


signInBtn.addEventListener('click', () => {
    nameF.style.maxHeight = '0';
    signuph.innerHTML = 'Sign In';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)'
});


signUpBtn.addEventListener('click', () => {
    nameF.style.maxHeight = '60px';
    signuph.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)'
});