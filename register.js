import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

// Registro con correo
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Usuario registrado:", user);
      alert("Registro exitoso! Ahora puedes iniciar sesión.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error en el registro:", error.code, error.message);
      alert("Error: " + error.message);
    });
});

// Registro con google
const googleBtn = document.getElementById("google-register");
googleBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Usuario con Google:", user);
      alert("Registro con Google exitoso! Ahora puedes iniciar sesión.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error con Google:", error.code, error.message);
      alert("Error: " + error.message);
    });
});

// Registro con github
const githubBtn = document.getElementById("github-register");
githubBtn.addEventListener("click", () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Usuario con GitHub:", user);
      alert("Registro con GitHub exitoso! Ahora puedes iniciar sesión.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error con GitHub:", error.code, error.message);
      alert("Error: " + error.message);
    });
});
