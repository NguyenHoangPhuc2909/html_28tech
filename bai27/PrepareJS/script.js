// Default Parameters
const sum = (a, b) => {
    return a + b;
}

console.log(sum(10, 20));

// const sum = (a = 10, b = 10) => {
//     return a + b;
// }

// console.log(sum());  => 20

// const sum = (a = 10, b = 10) => {
//     return a + b;
// }

// console.log(sum(0));  => 10

// const sum = (a, b) => {
// a = a || 0;
// b = b || 0;
//     return a + b;
// }

// console.log(sum());  
// Nếu không truyền giá trị thì a = 0, b = 0, nếu truyền sẽ lấy giá trị được truyền


//  Spread Syntax
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [1, 2, 3, 4, 5, 6];
const array4 = [...array1, ...array2];

console.log(...array1);
console.log(...array2);
console.log(array3);
console.log(array4);

let infoUser = {
    fullname: "Nguyen Hoang Phuc",
    email: "phucqaqs@gmail.com"
};

let infoUpdate = {
    phone: "0123456789",
    age: 18
};

let infoFinally = {
    ...infoUser,
    ...infoUpdate
};

console.log(infoFinally);

//Rest Parameters

// const product = () => {
//     return a * b;
// }

// console.log(product(10, 20, 30, 40, 50)); 
// => 200

// const product = (a, b, ...numbers) => {
//     console.log(numbers);
// => 10, 20, 30, 40, 50
//     return 0;
// }

// console.log(product(10, 20, 30, 40, 50)); 
// => 0

const Sum = (...numbers) => {
    const result = numbers.reduce((total, item) => {
        return total + item;
    }, 0);
    return result;
};

console.log(Sum(10, 20, 30, 40, 50)); //150

//Destructuring
console.log(infoUser.fullname);

const { fullname, email } = infoUser;
console.log(fullname);
console.log(email);