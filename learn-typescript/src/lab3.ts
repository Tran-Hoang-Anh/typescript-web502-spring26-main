// ===== 1. Hàm tính điểm trung bình (Arrow Function + Return Type) =====
const tinhDiemTrungBinh = (toan: number, ly: number, hoa: number): number => {
  return (toan + ly + hoa) / 3;
};

// ===== 2. Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type) =====
type KiemTraChanLe = (n: number) => boolean;

const laSoChan: KiemTraChanLe = (n: number): boolean => {
  return n % 2 === 0;
};

// ===== 3. Hàm tạo thông tin người dùng (Default + Optional Parameter) =====
const taoThongTinNguoiDung = (
  ten: string,
  tuoi: number = 18,
  diaChi?: string
): string => {
  return `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi ?? "Chưa cập nhật"}`;
};

// ===== 4. Hàm xử lý danh sách sản phẩm (Spread + Rest) =====
type SanPham = {
  ten: string;
  gia: number;
};

const xuLyDanhSachSanPham = (
  sanPhamMoi: SanPham,
  ...danhSachCu: SanPham[]
): SanPham[] => {
  return [...danhSachCu, sanPhamMoi];
};

// ===== Test =====
console.log("Điểm TB:", tinhDiemTrungBinh(8, 7, 9));
console.log("Số 10 là số chẵn?", laSoChan(10));
console.log(taoThongTinNguoiDung("Nam", 20));
console.log(
  xuLyDanhSachSanPham(
    { ten: "Chuột", gia: 200000 },
    { ten: "Bàn phím", gia: 500000 }
  )
);
