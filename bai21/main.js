import { sum } from "./sum.js";
import { a, b } from "./constant.js";
import { difference, div, mod, product, Sum } from "./calculator.js";

import thongBao from "./calculator.js";
let c = sum(a, b);

console.log(c);

console.log(Sum(a, b));
console.log(difference(a, b));
console.log(product(a, b));
console.log(div(a, b));
console.log(mod(a, b));

console.log(thongBao());

