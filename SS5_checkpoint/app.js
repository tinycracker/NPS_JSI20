// //Câu9
// let m = [1,2,3,4,5,6,"hh","9",80,100]
// let m1 = m.filter(item => typeof item == 'number' );
// let mSquared = m1.map(item => item*item);
// console.log(mSquared);


// //Cau 11
// class People {
//     constructor(name, age, address) {
//         this._name = name;
//         this._age = age;
//         this._address = address;
//     }

//     set() {
//         promt
//     }

//     get() {}
// }
// let C = new People(
//         "ABC",
//         12,
//         "Tây Hồ",
//     );

// class HocSinh extends People {
//     constructor(name, age, address, id, math, physical, chemistry) {
//         super(name, age, address);
//         this._id = id
//         this._math = math
//         this._physical = physical
//         this._chemistry = chemistry
//     }
// GPA() {
//         return ((math+physical+chemistry)/3);
// }
// }
//     let Ch = new HocSinh(
//             "ABC",
//             12,
//             "Tây Hồ",
//             10101010101,
//             8,
//             3.5,
//             10,)


//Cau12
class Hinh{
    constructor(width, height) {
                 this._width = width;
               this._height = height;
           }
}

let H = new Hinh(
    3,
    5
)

class Trgl extends Hinh{
    constructor(width,height) {
                super(width, height,);
}

area(){
    return(width*height/2)
}


}
class reg extends Hinh{
    constructor(width,height) {
                super(width, height,);
}

area(){
    return(width*height)
}
}

let A = new reg(
    3,5
)
A.area()
alert(
         A.area()
     )
    
