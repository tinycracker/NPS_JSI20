import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  doneDoc
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
//Nhúng firebase config vào dự án để kết nối server và website

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

const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"))
  console.log(querySnapshot);

  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id, //phục vụ tính năng: tìm, xóa, hoàn thành hoặc cập nhật
    description: doc.data().description,
  }));
  console.log();
  renderTasks(tasks); // Cập nhật lại giao diện dựa trên dữu liệu mới nhất từ firebase
}

////Hiển thị toàn bộ task mới nhất từ firebase UI

const renderTasks = (tasks) => {
  taskList.innerHTML = ""
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
   <span>${task.description}</span>
   <div>
   <button class="deleteBtn" data-id="${task.id}">Xóa</button>
   <button class="doneBtn" data-id="${task.id}">Xong</button>
   </div>
  `;
    taskList.appendChild(li);
    ///Xử lí sự kiện xóa task

    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id); // Gọi hàm xóa 1 task khi biết id
    })
  });
}

////Thêm 1 task vào trong firebase firestore
const addTask = async (description) => {

  await addDoc(collection(db, "tasks"), { description });

  //Lấy dữ liệu mới nhất từ DB về web
  getTasks();


}

////Xóa 1 task trong firebase firestore

const deleteTask = (id) => {
  const docRef = doc(db, "tasks", id);
  deleteDoc(docRef)
    .then(() => {
      console.log("Entire Document has been deleted successfully");

      getTasks(); //Lấy dữ liệu mới nhất từ DB về dự án
    })
    .catch((error) => {
      console.log(error); //nếu có lỗi logic thì sẽ hiển thị ở đây
    })

}

////Lắng nghe sự kiện người dùng click nút "Thêm"
addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.toLowerCase().trim();
  if (description != "") {
    addTask(description); // Chỉ lưu dữ liệu khi task không rỗng. Gọi hàm thêm 1 task vào trong db
    taskInput.value = "" // Xóa nội dung trong thẻ input sau khi ấn nút thêm
  }

  else {
    alert("task rỗng !!!");
  }
});

/* 
đề bài bổ sung
- Tạo thêm 1 nút " Hoàn thành" 
- Người dùng bấm nút Hoàn thành => Làm mờ và gạch ngang chữ của task đó
- Trong db khi hoàn thành rồi thì phải có thêm thuộc tính: status: true/false khi
chưa tick "hoàn thành"*/



