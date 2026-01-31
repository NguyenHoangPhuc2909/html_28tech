export function tong(a, b, callback) {
    let ketQua = a + b;
    console.log(ketQua);
    // kiemTraSoDuong(ketQua);
    // kiemTraSoChanLe(ketQua);
    callback(ketQua);
}