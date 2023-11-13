function tinhTongDiem() {
    let diemBaiKiemTra = parseFloat(document.getElementById("diemBaiKiemTra").value);
    let diemThiGiuaKy = parseFloat(document.getElementById("diemThiGiuaKy").value);
    let diemThiCuoiKy = parseFloat(document.getElementById("diemThiCuoiKy").value);
    let SoBaiKiemTra = 0.3;
    let SoThiGiuaKy = 0.3;
    let SoThiCuoiKy = 0.4;
    let tongDiem = (SoBaiKiemTra * diemBaiKiemTra) + (SoThiGiuaKy * diemThiGiuaKy) + (SoThiCuoiKy * diemThiCuoiKy);
    let hocLuc = xepHangHocLuc(tongDiem);
    document.getElementById("ketQua").innerHTML = 'Tổng điểm: ' + tongDiem + '<br>Xếp hạng học lực: ' + hocLuc;
}
function xepHangHocLuc(tongDiem) {
    if (tongDiem >= 90) {
    return 'A';
} else if (tongDiem >= 80) {
    return 'B';
} else if (tongDiem >= 70) {
    return 'C';
} else if (tongDiem >= 60) {
    return 'D';
} else {
    return 'F';
}
}
