import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Api de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9sD1H__CYTzWslUxoRcDgI9tTnb7JRkU",
    authDomain: "loginsenati-64f29.firebaseapp.com",
    projectId: "loginsenati-64f29",
    storageBucket: "loginsenati-64f29.firebasestorage.app",
    messagingSenderId: "172396578743",
    appId: "1:172396578743:web:8d6faea2cf4f1750218a32"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Detectar usuario 
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("grand-name").textContent = user.displayName || "Usuario";
    document.getElementById("grand-email").textContent = user.email;
    document.getElementById("grand-avatar").src = user.photoURL || "https://placehold.co/80x80";
  } else {
    window.location.href = "index.html";
  }
});

// Cerrar session
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Sesión cerrada.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error.message);
    });
});