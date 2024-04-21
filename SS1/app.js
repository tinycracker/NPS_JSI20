let students = [{
    id:1,
    name:"Lê Anh",
    age:1,
    major:"Computer Science",
},
{
    id:2,
    name:"Vũ Dũng",
    age:12,
    major:"Mathematices",
},

];

//yêu cầu:+ Sử dụng push để thêm 1 học sinh mới và, sử dụng findIndex để tìm kiếm học sinh theo id, sử dụng splice để xóa 1 học sinh khỏi mảng dựa trên id, cập nhật in ra mảng mới

students.push({
    id:3,
    name:"Quân",
    age:20,
    major:"Homeless people",},
)

n = Number(prompt("Mời người dùng nhập vào id học sinh"));
console.log(students.findIndex(obj => obj.id == n));
console.log(students[n]);

a = Number(prompt("Mời người dùng nhập vào id học sinh muốn xóa"));
console.log(students.findIndex(obj => obj.id == a));
students.splice(a,1,0)


console.log(students);