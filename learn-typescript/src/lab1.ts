// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
// funtion ChuViHCN(){}
// 1️ Hàm trả về chu vi & diện tích hình chữ nhật
function hinhChuNhat(chieuDai: number, chieuRong: number) {
  const chuVi: number = 2 * (chieuDai + chieuRong);
  const dienTich: number = chieuDai * chieuRong;

  return {
    chuVi,
    dienTich
  };
}

// 2️ Hàm tính tổng nhiều số (rest parameter)
function tinhTong(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 3️ Hàm đếm số lần xuất hiện của 1 ký tự trong chuỗi
function demKyTu(chuoi: string, kyTu: string): number {
  let count: number = 0;

  for (const char of chuoi) {
    if (char === kyTu) {
      count++;
    }
  }

  return count;
}

// 4️ Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n: number): boolean {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// 5️ Hàm chu vi hình chữ nhật
function ChuViHCN(chieuDai: number, chieuRong: number): number {
  return 2 * (chieuDai + chieuRong);
}

// ================= TEST =================
console.log(hinhChuNhat(5, 3));
console.log(tinhTong(1, 2, 3, 4));
console.log(demKyTu("typescript", "t"));
console.log(laSoNguyenTo(7));
console.log(ChuViHCN(4, 6));
