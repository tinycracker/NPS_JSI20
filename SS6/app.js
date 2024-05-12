import{
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
//Nhúng firebase config vào dự án để keert nối server và website

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

//Import the functions 
  const firebaseConfig = {
    apiKey: "AIzaSyD_Zny-BxvsYZXKfYi4BEthOr4qKQKOi9Y",
    authDomain: "npsjsi20.firebaseapp.com",
    projectId: "npsjsi20",
    storageBucket: "npsjsi20.appspot.com",
    messagingSenderId: "381857842208",
    appId: "1:381857842208:web:3da01d57ab66055f9b6845",
    measurementId: "G-EZD0BBPN1B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const db = getFirestore(app);

// Lấy ra 3 thẻ bên html và lưu trữ lại vào biến để dễ dàng gọi
const taskInput = document.getElementById("taskInput"); //input
const askTaskBtn = document.getElementById("addTaskBtn"); //btn
const taskList = document.getElementById("taskList"); //ul

///////Liệt kê các hàm cần sử dụng để hoàn thành todolist


////Cập nhật dữ liệu mới nhất lấy về từ firestore ra UI

////Hiển thị toàn bộ task mới nhất từ firebase UI

////Thêm 1 task vào trong firebase firestore
const addTask = async (description)=>{

    await addDoc(collection(db,"tasks"), {description});
    //Lấy dữ liệu mới nhất từ DB về web
    getTasks();
}

////Xóa 1 task trong firebase firestore

////Lắng nghe sự kiện người dùng click nút "Thêm"
addTaskBtn.addEventListener("click", ()=>{
    const description = taskInput.value.toLowerCase().trim();
    if(description != ""){
        addTask(description); // Chỉ lưu dữ liệu khi task không rỗng. Gọi hàm thêm 1 task vào trong db
    }
    else{
        alert("task rồng !!!");
    }
});
