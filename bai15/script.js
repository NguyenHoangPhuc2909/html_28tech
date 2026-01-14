var button = document.querySelector("button");
button.onclick = function () {
    alert('Xin chao');
}
// alert("Xin chao ban");
// confirm("Tuoi cua ban la 20 tuoi dung khong?");
// var result2 = prompt("Nhap ten cua ban:", "Nguyen Hoang Phuc");
// console.log(result2);

setTimeout(function () {
    console.log("Xin chao");
}, 5000)

// setInterval(function () {
//     console.log("Xin chao");
// }, 5000)

// var a = 10;
// var b = "Nội dung...";
// var c;
// var d = null;
// var e = true;

// console.log(typeof a);          // number
// console.log(typeof b);          // string
// console.log(typeof (a + b));    // string
// console.log(typeof c);          // undefined
// console.log(typeof d);          // object
// console.log(typeof e);          // boolean
// console.log(typeof a == "number"); // true

var myString = `Xin chao! Toi ten la Phuc. Toi nam nay 20 tuoi.`;

console.log(myString.length); //47
console.log(myString.replace("Toi", "Minh"));
console.log(myString.replace(/Toi/g, "Minh"));
console.log(myString.indexOf("Toi"));
console.log(myString.indexOf("Tôi"));
console.log(myString.indexOf("Phuc"));
console.log(myString.indexOf("nam"));
console.log(myString.indexOf("Toi", 11));

console.log(myString.lastIndexOf("Toi", 24));
console.log(myString.lastIndexOf("Toi", 30));
console.log(myString.lastIndexOf("Toi", 15));
console.log(myString.lastIndexOf("Toi"));
console.log(myString.lastIndexOf("Toi", 5));

console.log(myString.charAt());
console.log(myString.charAt(0));
console.log(myString.charAt(1));
console.log(myString.charAt(myString.length - 1));