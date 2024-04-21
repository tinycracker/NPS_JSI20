// /// Lập trình hướng đối tượng OOP
// //    - Khái niệm: là mô hình lập trình dựa trên khái niệm của các "đối tượng ", có thể 
// // chứa dữ liệu, dưới dạng trường ( thuộc tính, phương thức). Gíup tổ chức mã theo mô phỏng 
// // thế giới thực

// //    - Ứng dụng trong JS:
// // + Tạo ra các chương trình có cấu trúc rõ ràng, dễ mở rộng và bảo trì
// // + Sử dụng để tạo ra các cấu trúc dữ liệu phức tạp
// // + Xây dựng cho thư viện và framework


// //// Các kiểu dữ liệu: object, string, number, boolean






// //Khởi tạo đối tượng Nguoi
// class Nguoi {
//     // Hàm khởi tạo thuốc tính cho class
//     constructor(id, name, age, address, hobbies, gender) {
//         // Tiến hành lưu trữ giá trị truyền vào class
//         this._id = id;
//         this._name = name;
//         this._age = age;
//         this._address = address;
//         this._hobbies = hobbies;
//         this._gender = gender;

//     }

//     //Khai báo phương thức cho class này
//     introduction() {
//         return (`My name is ${this._name} and I ${this._age} years old`);
//     }

//     cry() {
//         alert(`I am crying`);
//     }

// }


// // // Khởi tạo đổi tượng có kiểu dữ liệu Nguoi
// // let C = new Nguoi(
// //     "1000000000",
// //     "havbhbkjefb",
// //     15, "Tây Hồ",
// //     ["ngủ", "thức"],
// //     "nam"
// // );

// // // In ra tên của C
// // console.log(C._name);

// // // Gọi tên phương thức giới thiệu bản thân
// // C.introduction();


// // Tính kế thừa trong lập trình OOP
// class HocSinh extends Nguoi {
//     constructor(id, name, age, address, hobbies, gender, idStudent, classs, totalScore) {
//         super(id, name, age, address, hobbies, gender);
//         //Từ khóa super giúp kế thừa hết các thuộc tính từ class cha
//         this._idStudent = idStudent
//         this._classs = classs
//         this._totalScore = totalScore
//     }



//     ///Kế thừa phương thức

//     //Kế thừa hoàn toàn mà không thay đổi cái gì ( không cần viết lại các phương thức từ cha)


//     // Kế thừa và ghi đè hoặc phát triển từ cha
//     introduction() {
//         return super.introduction() + `. And now I am learning at ${this._classs} with student id is ${this._idStudent}. Finally my total score is ${8.3}`
//     }
// }

// ////// Khởi tạo 1 học sinh
// let C = new HocSinh(
//     "1000000000",
//     "havbhbkjefb",
//     15, "Tây Hồ",
//     ["ngủ", "thức"],
//     "nu",
//     "ruanzhi",
//     "NPS-JSI20",
//     8.3

// );

// console.log(C);
// alert(
//     C.introduction()
// );








//////Bài tập tổng hợp
// Tạo 1 lớp Hình chữ nhật gồm 2 thuộc tính là width và height
/*Yêu cầu:
- Xây dựng phương thức tính diện tích HCN
- Xây dựng phương thức tính chu vi HCN
*/

class Hcn {
    constructor(width, height){
        this._width = width
        this._height = height
    }


Dt (){
    return (`Diện tích hình chữ nhật là ${this._width * this._height}`);}

Cv (){
    return (`Chu vi hình chữ nhật là ${(this._width + this._height)*2} `)
}
}
 
// Khởi tạo 1 hcn
 let C = new Hcn(
    20,
    30,
);


alert(
    C.Dt ()
)
alert(
    C.Cv ()
)


///   Tạo 1 lớp vehicle với các thuộc tính và phương thức cơ bản:
//- thuộc tính: make, model, year
//- phương thức: displayDetails(){} hiển thị thông số phương tiện bằng văn bản
// Yêu cầu: tạo 1 lớp car kế thừa từ lớp vehicle vì thêm thuộc tính numberOfDoors

class Vehicle{
    constructor(make, model, year){
        this._make = make
        this._model = model
        this._year = year
    }


displayDetails(){
    return `Make: ${this._make}, Model: ${this._model}, Year:${this._year}`
}
}

class Car extends Vehicle{
    constructor(make, model, year, numberOfDoors){
        super(make, model, year)
        this._numberOfDoors = numberOfDoors
    }

displayDetails(){
    return super.displayDetails() + `, Number of Doors: ${this._numberOfDoors}`
}
}

let myCar =  new Car("T","C",2021,4);
console.log(myCar.displayDetails());