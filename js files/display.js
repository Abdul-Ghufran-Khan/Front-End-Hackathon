import { app , auth } from "./firebase.mjs";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const db = getFirestore(app);

function getprofileinfo(uid) {
    console.log("Fetching data from the uid : ",uid);
    const userDocRef = doc(db, "users", uid);
    getDoc(userDocRef)
    .then((docSnapshot) => {
        if (docSnapshot.exists()) {
            const userData = docSnapshot.data();

            console.log("User data retrieved:", userData);
            document.getElementById('profile-name').innerText = `${ userData. Fullname}`;
            document.getElementById('profile-contact').innerText = userData.Number;
            document.getElementById('profile-city').innerText = userData.City;

            document.getElementById('user-name').innerHTML = `<strong>Name:</strong> ${userData.Fullname}`;
            document.getElementById('user-email').innerHTML = `<strong>Email Address:</strong> ${userData.Email}`;
            document.getElementById('user-contact').innerHTML = `<strong>Contact:</strong> ${userData.Number}`;
            document.getElementById('user-dob').innerHTML = `<strong>Date of Birth:</strong> ${userData. DateofBirth}`;
            document.getElementById('user-gender').innerHTML = `<strong>Gender:</strong> ${userData.Gender}`;
            document.getElementById('user-city').innerHTML = `<strong>City:</strong> ${userData.City}`;
        }
    })
    .catch((error) =>
    {
        window.location.href = 'loginAcc.html';
    });
}
    


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      getprofileinfo(uid)
    } else {
      
    }
  });
  