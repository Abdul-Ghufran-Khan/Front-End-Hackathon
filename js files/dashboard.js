import { app, auth } from "./firebase.mjs";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const db = getFirestore(app);

$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter")

        if (value == "all") {
            $(".post-box").show("1000");
        }
        else {
            $(".post-box").not("." + value).hide("1000")
            $(".post-box").filter("." + value).show('1000')
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass('active-filter')
    })
})

let createpost = document.getElementById('createpost')
createpost.addEventListener('click', () => {
    window.location.href = 'createpost.html'
})


let signout = document.getElementById('signout')
signout.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 1000);
    }).catch((error) => {
        // An error happened.
        console.log(error);

    });
})


let profile = document.getElementById('man')
profile.addEventListener('click', () => {
    window.location.href = 'display.html';
})

let postscontainer = document.getElementById('postscontainer')
const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
    let data = doc.data()
    postscontainer.innerHTML += `<div class="post-box mobile">
            <img src="/images/post-1.jpg" alt="" class="post-img">
            <h2 class="category">${data.Caption}</h2>
            <a href="#" class="post-title">How to create UX Design With Adobe XD </a>
            <span class="post-date">17 Aug 2024</span>
            <p class="post-discription">${data.Discription}</p>
                <!-- profile -->
                 <div class="profile">
                    <img src="/images/profile-1.jpg" alt="" class="profile-img">
                    <span class="profile-name">${data.Name}</span>
                 </div>
        </div>`
    console.log(`${doc.id} => ${data.Caption}`);
});