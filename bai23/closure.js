const c = 10;

const tinhToan = () => {
    const c = 20;
    const tong = (a, b) => {
        return a + b;
    } 
    const hieu = (a, b) => {
        return a - b;
    } 
    const tich = (a, b) => {
        return a * b;
    } 
    const thuong = (a, b) => {
        return a / b;
    } 
    return {tong: tong,
        hieu: hieu, 
        tich: tich,
        thuong: thuong
    };
};


const tt = tinhToan();
console.log(tt);
console.log(tt.tich(10, 2));
// console.log(tt(20, 30));


const info = () => {
    let fullname = "Nguyen Hoang Phuc";

    const getFullName = () => {
        return fullname;
    }

    const setFullName = (string) => {
        fullname = string;
    }

    return {
        get: getFullName,
        set: setFullName
    };
}

const infoUser = info();
console.log(infoUser);
console.log(infoUser.get());