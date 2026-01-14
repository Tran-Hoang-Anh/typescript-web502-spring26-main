"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
function logStatus(status) {
    if (status === "loading")
        console.log("Đang tải...");
    if (status === "success")
        console.log("Thành công");
    if (status === "error")
        console.log("Có lỗi xảy ra");
}
