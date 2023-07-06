function numberconnection() {
  var loaikhachhang = document.getElementById("loai").value;
  var sokenhketnoi = document.getElementById("connection");
  if (loaikhachhang == "doanh-nghiep") {
    sokenhketnoi.style.display = "block";
  } else {
    sokenhketnoi.style.display = "none";
  }
}
function tinhtiennhadan (sokenhcaocap){
    var phixulyhoadon = 4.5;
    var phidichvucoban = 20.5;
    var phithuekenhcaocap = sokenhcaocap * 7.5;
    var tongchiphi = phixulyhoadon + phidichvucoban + phithuekenhcaocap;
    return tongchiphi;
}
function tinhtiendoanhnghiep(sokenhcaocap,kenhketnoi){
    var phixulyhoadon = 15;
    if(kenhketnoi <= 10){
        var phidichvucoban =75;
    }else {
        var phidichvucoban = 75 + (kenhketnoi - 10)*80;
    }
    var phithuekenhcaocap = sokenhcaocap * 50;
    var tongchiphi = phixulyhoadon + phidichvucoban + phithuekenhcaocap;
    return tongchiphi;
}
function tinhtien() {
  var loaikhachhang = document.getElementById("loai").value;
  var usercode = document.getElementById("ma-khach-hang").value;
  var sokenhcaocap = document.getElementById("kenh-cao-cap").value * 1;
  var kenhketnoi = document.getElementById("ket-noi").value * 1;
  var sum = 0;
  if(loaikhachhang == "nha-dan"){
    sum = tinhtiennhadan (sokenhcaocap);
  }else{
    sum = tinhtiendoanhnghiep(sokenhcaocap,kenhketnoi);
  }
  document.getElementById("result").innerHTML =`
  <h2>👉Mã khách hàng: ${usercode};Tiền cáp:$${sum.toLocaleString()}</h2>
  `
}
