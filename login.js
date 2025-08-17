import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // Api de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9sD1H__CYTzWslUxoRcDgI9tTnb7JRkU",
    authDomain: "loginsenati-64f29.firebaseapp.com",
    projectId: "loginsenati-64f29",
    storageBucket: "loginsenati-64f29.firebasestorage.app",
    messagingSenderId: "172396578743",
    appId: "1:172396578743:web:8d6faea2cf4f1750218a32"
};

// Iniciador
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login con Correo
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "grand.html";
    })
    .catch(err => alert("Error: " + err.message));
});

// Login con Google
document.getElementById("google-login").addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => window.location.href = "grand.html")
    .catch(err => alert("Error: " + err.message));
});

// Login con GitHub
document.getElementById("github-login").addEventListener("click", () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => window.location.href = "grand.html")
    .catch(err => alert("Error: " + err.message));
});
