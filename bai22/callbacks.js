import { kiemTraSoChanLe } from "./helpers/kiemTraSoChanLe.js";
import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
import { tong } from "./helpers/tong.js";

// VD: Dạng thường 
// function ham1() {
//     console.log("Ham 1");
// }

// function ham2() {
//     console.log("Ham 2");
// }

// ham1();
// ham2();

//VD: Dạng Callback

// function ham1(Callback) {
//     console.log("ham1");
//     Callback();
// }

// function ham2() {
//     console.log("Ham 2");
// }

// ham1(ham2);

//VD:


tong(10, 20, kiemTraSoDuong);
tong(10, 25, kiemTraSoChanLe);