
        function tinhHoaHong() {
        var doanhSo = document.getElementById('doanhSo').value;
        if (isNaN(doanhSo) || doanhSo === '') {
        alert('Vui lòng nhập một số hợp lệ.');
        return;
    }
        var tyLeHoaHong = 0.1;
        var hoaHong = doanhSo * tyLeHoaHong;
        document.getElementById('ketQua').innerHTML = 'Hoa hồng nhận được là: ' + hoaHong.toFixed(2) + ' đồng';
    }
