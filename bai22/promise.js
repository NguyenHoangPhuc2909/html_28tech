//VD1:
var a = 10;

var promise = new Promise((resolve, reject) => {
    if (a != undefined && a != null && a != ""){
        resolve(a); //Thành công
    }
    else {
        reject();
    }
});

promise
    .then((success) => {
        console.log(success);
        return success;
    })
    .then((success2) => {
        // console.log(success2);
        const b = 20;
        console.log(success2 + b);
        return success2 + b;
    })
    .then((success3) => {
        const c = 30;
        console.log(success3 + c);
    })
    .catch((error) => {
        console.log("Error");
    })
    .finally(() => {
        console.log("Always in here");
    })

//VD2:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        // reject();
    }, 5000);
});
console.log(promise1);

setTimeout(() => {
    console.log("Sau 1 giay: ", promise1);
}, 1000);

setTimeout(() => {
    console.log("Sau 2 giay: ", promise1);
}, 2000);

setTimeout(() => {
    console.log("Sau 3 giay: ", promise1);
}, 3000);

setTimeout(() => {
    console.log("Sau 5 giay: ", promise1);
}, 5000);

//VD3: Promise.all
let x = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;

let sum1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(x + b);
    }, 3000);
});

let sum2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(c + d);
    }, 4000);
});

let sum3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(e + f);
    }, 6000);
});

Promise.all([sum1, sum2, sum3])
    .then(([sum1, sum2, sum3]) => {
        let sum = sum1 + sum2 + sum3;
        console.log(sum);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Luon vao day");
    })