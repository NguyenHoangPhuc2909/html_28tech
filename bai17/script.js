// function calcSum( a,  b) {
//     return a + b;
// }

// let result = calcSum(10, 20);
// console.log(result);

//Tính hoisting
// let result = calcSum(10, 20, 30, 40);
// console.log(result);


// function calcSum() {
//     // console.log(arguments);
//     // let tong = 0;
//     // for(var i = 0; i < arguments.length; i++) {
//     //     tong += arguments[i];
//     // }
//     // console.log(tong);
//     // return tong;

//     let tong = 0;
//     for(item of arguments) {
//         console.log(item);
//         tong += item;
//     }
//     return tong;
// }

// let result = calcSum(10, 20, 30, 40);
// console.log(result);

function funcA() {
    console.log("Ham A");

    function funcB() {
        console.log("Ham B");
    }

    funcB();
}

funcA();

//Expression function
// var tinhTong = function(){
//     let tong = 0;
//     for(item of arguments) {
//         tong += item;
//     }
//     return tong;
// }

// var ketQua = tinhTong(10, 20, 30);
// console.log(ketQua);

//Arrow function
// var tinhTong = (...test) => {
//     console.log(test);
//     let tong = 0;
//     for(item of test){
//         tong += item;
//     }
//     return tong;
// }

// var ketQua = tinhTong(10, 20, 30, 40);
// console.log(ketQua);

var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function tinhTongSoChan(array){
//     let tong = 0;
//     for(item of array) {
//         if(item % 2 == 0){
//             tong += item;
//         }
//     }
//     console.log(tong);
//     return tong;
// }

// var tinhTongSoChan = function (array) {
//     let tong = 0;
//     for (item of array) {
//         if (item % 2 == 0) {
//             tong += item;
//         }
//     }
//     console.log(tong);
//     return tong;
// }

var tinhTongSoChan = (...array) => {
    let tong = 0;
    for (item of array) {
        if (item % 2 == 0) {
            tong += item;
        }
    }
    console.log(tong);
    return tong;
}

var ketQua = tinhTongSoChan(...mang);
// console.log(ketQua);

// bieuThuc = 1/n + 2/n + 3/n + ... + n/n
function tinhBieuThuc(n) {
    let ketQua = 0;
    for(let i = 1; i <= n; i++){
        ketQua += i/n;
    }
    console.log(ketQua);
    return ketQua;
}

let n;
do {
    n = prompt("Nhap n:");
    n = parseInt(n);
    if(n <= 0) {
        console.log("Vui long nhap so lon hon 0");
    }
    else {
        let ketqua = tinhBieuThuc(n);
    }
} while (n <= 0)


let tong = mang.reduce((total, item) => {
    console.log(total);
    return total + item;
});

console.log("--------------------------------");
console.log(tong);

let trungBinh = mang.reduce(function(avg, item){
    console.log(avg);
    return avg + item/mang.length;
}, 0);

console.log(trungBinh);