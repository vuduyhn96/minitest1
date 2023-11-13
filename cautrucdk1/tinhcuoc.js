function tinhCuocDienThoai() {
    // Lấy giá trị số phút và số tin nhắn từ ô nhập liệu
    var soPhut = parseFloat(document.getElementById('soPhut').value);
    var soTinNhan = parseFloat(document.getElementById('soTinNhan').value);

    if (isNaN(soPhut) || isNaN(soTinNhan)) {
        alert('Vui lòng nhập số phút và số tin nhắn hợp lệ.');
        return;
    }
    var cuocPhut = 0.05;
    var cuocTinNhan = 500;
    var tongCuoc = soPhut * cuocPhut + soTinNhan * cuocTinNhan;
    document.getElementById('ketQua').innerHTML = 'Tổng cước là: ' + tongCuoc.toFixed(2) + ' đồng';
}