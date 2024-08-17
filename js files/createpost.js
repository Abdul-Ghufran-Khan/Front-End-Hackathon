import { app } from "./firebase.mjs";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const db = getFirestore(app);


let addpost = document.getElementById('addpost')
addpost.addEventListener('click', async (e)=>{
    e.preventDefault()

    let caption = document.getElementById('caption').value;
    let discription = document.getElementById('discription').value;
    let Name = document.getElementById('naam').value;

    try {
        const docRef = await addDoc(collection(db, "posts"), {
          Caption : caption,
          Discription : discription,
          Name : Name
        });
        console.log("Document written with ID: ", docRef.id);
        window.location.href = 'dashboard.html'
      } catch (e) {
        console.error("Error adding document: ", e);
      }   
})

