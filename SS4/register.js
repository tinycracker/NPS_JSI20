import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {auth} from './firebase.js'



//Lấy ra thông tin thẻ form
const form = document.getElementById("register-form");
// Bắt sự kiện submit thẻ form
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Ngăn trình duyệt reload
  
    // Lấy ra data người dùng nhập gồm: email & pass
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
  
    // xử lý với xác thực người dùng: đăng ký người dùng với email & pass
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = updateProfile.user;
        console.log(user); /// In ra gì?
      }
    );
  });
  
  
