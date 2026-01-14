// var a = 10;
// if(a > 5) {
//     console.log("Dap an dung a > 5");
// } else {
//     console.log("a nho hon hoac bang 5");
// }

var diemThi = 2;
if (diemThi >= 8) {
    console.log("HSG");
}
else if (diemThi < 8 && diemThi >= 6.5) {
    console.log("HSK");
}
else {
    console.log("HSTB");
}

var a; var b;
if (a != undefined && b != undefined) {
    if (a == b) {
        console.log("a bang b");
    } else {
        console.log("a khac b");
    }
}
else {
    console.log("a hoac b chua duoc gan gia tri.")
}


var x = 1;
switch(x) {
    case 1:
        console.log("Day la gia tri 1");
    case 2:
        console.log("Day la gia tri 2");
        break;
    case 3:
        console.log("Day la gia tri 3");
        break;
    case 4:
        console.log("Day la gia tri 4");
        break;
    default:
        console.log("Khong xac dinh");
        break;
}


// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 10; i+=3) {
//     console.log(i);
// }

// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }

// var infoUser = {
//     fullname: "Nguyen Hoang Phuc",
//     age: 18, 
//     email: "phucqaqs@gmail.com",
//     phone: "0123456789"
// }

// console.log(infoUser.fullname);

// for (item in infoUser) {
//     console.log(item);
//     console.log(item, infoUser[item]);
// }

// var listUser = [
//     "Le Van A",
//     "Nguyen Thi B", 
//     "Do Thi C"
// ]

// var listUser = [
//     {
//         name: "Le Van A",
//         age: 20
//     },
//     {
//         name: "Nguyen Thi B",
//         age: 22
//     },
//     {
//         name: "Do Thi C",
//         age: 24
//     }
// ]
// for(item of listUser){
//     console.log(item);
// }

// var aa = 10;
// var bb = 20;
// var cc = aa + bb;

if(true) {
    let a = 10;
    var b = 20;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);