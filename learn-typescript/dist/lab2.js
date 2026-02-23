"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo enum rate
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
// Tạo mảng listProducts với ít nhất 5 phần tử
let listProducts = [
    { name: 'Sản phẩm A', price: 3, sale: true, rate: Rate.low },
    { name: 'Sản phẩm B', price: 6, sale: false, rate: Rate.medium },
    { name: 'Sản phẩm C', price: 10, sale: true, rate: Rate.hight },
    { name: 'Sản phẩm D', price: 5, sale: true, rate: Rate.medium },
    { name: 'Sản phẩm E', price: 8, sale: false, rate: Rate.hight }
];
// Hàm thêm key description cho từng phần tử (sử dụng map)
function addDescription(products) {
    return products.map(product => ({
        ...product,
        description: product.price > 5 ? 'Tốt' : 'Bình thường'
    }));
}
// Hàm hiển thị danh sách sản phẩm (sử dụng forEach)
function showProducts(products) {
    products.forEach(product => {
        console.log(`Tên: ${product.name}, ` +
            `Giá: ${product.price}, ` +
            `Sale: ${product.sale}, ` +
            `Đánh giá: ${product.rate}`);
    });
}
// Hàm tính tổng giá bán sản phẩm (sử dụng reduce)
function totalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
// Hàm lọc sản phẩm đang sale và đánh giá từ Trung bình trở lên (sử dụng filter)
function filterSaleProducts(products) {
    return products.filter(product => product.sale === true &&
        (product.rate === Rate.medium || product.rate === Rate.hight));
}
// ================== GỌI HÀM ==================
listProducts = addDescription(listProducts);
console.log('Danh sách sản phẩm:');
showProducts(listProducts);
console.log('Tổng giá bán:', totalPrice(listProducts));
console.log('Sản phẩm đang Sale và đánh giá từ Trung bình trở lên:');
console.log(filterSaleProducts(listProducts));
