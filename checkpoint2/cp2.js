
let ul = document.getElementById("timers");
console.log("ul: ", ul);

let timers = []; // Nơi lưu trữ toàn bộ đồng hồ của web.
for (let i = 0; i < 5; i++) {
  // Duyệt 5 lần
  let timer = document.createElement("li"); //Tạo ra thẻ li
  timer.className = "timer";
  timer.innerHTML = `
    <span class="time">00:00</span>
    <button onclick="startTimer(${i})">Start</button>
    <button onclick="stopTimer(${i})">Stop</button>
    <button onclick="pauseTimer(${i})">Pause</button>
    `;
  timers.push({ element: timer, interval: null, time: 0 }); // Thêm đối tượng clock0 vào List
  // Xác định vị trí của Li
  ul.appendChild(timer);
}

console.log(timers);
// /// Hàm Startimer
function startTimer(i) {
  stopTimer(i); // Clear nó đi cho sạch thời gian.
 
  timers[i].interval = setInterval(() => {
    timers[i].time++;
    let minutes = Math.floor(timers[i].time / 60); // Đổi từ giây -> phút
    let seconds = timers[i].time % 60;
    timers[i].element.querySelector(".time").textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopTimer(i){
    clearInterval(timers[i].interval);//Tạm dừng đồng hồ
    timers[i].time=0;
    timers[i].element.querySelector(".time").textContent="00:00"
}


function pauseTimer(){
    clearInterval(timers[i].interval);//Tạm dừng đồng hồ
}


function startAll(){
    for(let i =0; i<= timers.length; i++){
        startTimer(i)
    }
}
function stopAll(){
    for(let i =0; i<= timers.length; i++){
        stopTimer(i)
    }
}
