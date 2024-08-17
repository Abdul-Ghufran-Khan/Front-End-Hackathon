import { app, auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const db = getFirestore(app);

let line = document.getElementById('line')

let button = document.getElementById('button')
button.addEventListener("click", (e) => {
    e.preventDefault()
    const fullname = document.getElementById('Full-name').value;
    const dateofbirth = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('City').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name = "gender"]:checked').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user.uid);
                return setDoc(doc(db, 'users', user.uid), {
                    Fullname: fullname,
                    DateofBirth: dateofbirth,
                    Email: email,
                    City: city,
                    Number: number,
                    Gender: gender
                });
            })
            .then((userCredential) => {
                line.style.color = 'green'
                line.innerHTML = '<b>Account created<b/>'
                setTimeout(() => {
                    window.location.href = 'login.html'
                }, 1000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                line.style.color = 'red'
                line.innerHTML = `${errorMessage}`
            });

})