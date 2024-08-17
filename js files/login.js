import { app, auth } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let mess = document.getElementById('mess')

let loginbtn = document.getElementById('login-btn')
loginbtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid);
            mess.style.color = 'green'
            mess.innerHTML = '<b>Successfully Logged In<b/>'
            setTimeout(() => {
                window.location.href = 'dashboard.html'
            }, 1000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            mess.style.color = 'red'
            mess.innerHTML = `${errorMessage}`
        });

})