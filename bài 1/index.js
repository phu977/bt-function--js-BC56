const KHU_VUC_A = "A";
const KHU_VUC_B = "B";
const KHU_VUC_C = "C";

function diemkhuvuc(khuvuc) {
  switch (khuvuc) {
    case KHU_VUC_A: {
      return 2;
    }
    case KHU_VUC_B: {
      return 1;
    }
    case KHU_VUC_C: {
      return 0.5;
    }
    default: {
      return 0;
    }
  }
}

function diemdoituong(doituong) {
  switch (doituong) {
    case 1: {
      return 2.5;
    }
    case 2: {
      return 1.5;
    }
    case 3: {
      return 1;
    }
    default: {
      return 0;
    }
  }
}
function Ketqua() {
  var number1 = document.getElementById("mon-thu-nhat").value * 1;
  var number2 = document.getElementById("mon-thu-hai").value * 1;
  var number3 = document.getElementById("mon-thu-ba").value * 1;
  var diemchuan = document.getElementById("diem-chuan").value * 1;
  var khuvuc = document.getElementById("khu-vuc").value;
  var doituong = document.getElementById("doi-tuong").value*1;
  var diemvung = diemkhuvuc(khuvuc);
  console.log("🚀 ~ file: index.js:48 ~ Ketqua ~ diemvung:", diemvung)
  
  var diencanhan = diemdoituong(doituong);
  console.log("🚀 ~ file: index.js:51 ~ Ketqua ~ diencanhan:", diencanhan)
  
  var xeploai = "";
  var tongdiem = number1 + number2 + number3 + diemvung + diencanhan;
  if (number1 <= 0 || number2 <= 0 || number3 <= 0) {
    xeploai = "rớt";
  }
  while(diemchuan > 30){
    alert("Điểm chuẩn vượt quá 30. Vui lòng nhập lại điểm.");
    // nhập sai điểm chuẩn cao hơn 30 sẽ reload lại trang
    location.reload();
    return;
  }
  if (tongdiem >= diemchuan) {
    xeploai = "đậu";
  } else {
    xeploai = "rớt";
  }
  document.getElementById("result").innerHTML = `
  <h2>Xếp loại:${xeploai} - Tổng điểm:${tongdiem}</h2>
  `;
}
