"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== 1. Hàm tính điểm trung bình (Arrow Function + Return Type) =====
const tinhDiemTrungBinh = (toan, ly, hoa) => {
    return (toan + ly + hoa) / 3;
};
const laSoChan = (n) => {
    return n % 2 === 0;
};
// ===== 3. Hàm tạo thông tin người dùng (Default + Optional Parameter) =====
const taoThongTinNguoiDung = (ten, tuoi = 18, diaChi) => {
    return `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi ?? "Chưa cập nhật"}`;
};
const xuLyDanhSachSanPham = (sanPhamMoi, ...danhSachCu) => {
    return [...danhSachCu, sanPhamMoi];
};
// ===== Test =====
console.log("Điểm TB:", tinhDiemTrungBinh(8, 7, 9));
console.log("Số 10 là số chẵn?", laSoChan(10));
console.log(taoThongTinNguoiDung("Nam", 20));
console.log(xuLyDanhSachSanPham({ ten: "Chuột", gia: 200000 }, { ten: "Bàn phím", gia: 500000 }));
