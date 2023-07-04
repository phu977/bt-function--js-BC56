function trong50kwdau(numberKw) {
    var tongkwdau = numberKw * 500;
    return tongkwdau;
}
function khoang50den100kw(numberKw){
    var tong50den100kw = 50*500 + (numberKw - 50)*650;
    return tong50den100kw;
}
function khoangtu100den200kw(numberKw){
    var tongtu100den200kw = 50*500 + 50*650 + (numberKw - 100)*850;
    return tongtu100den200kw;
}
function khoangtu200kwden350kw(numberKw){
    var tongtu200kwden350kw = 50*500 + 50*650 +100*850 +(numberKw - 200)*1100;
    return tongtu200kwden350kw;
}
function khoangtutren350kw(numberKw){
    var tongtutren350kw = 50*500 + 50*650 +100*850 +150*1100 +(numberKw -350)*1300;
    return tongtutren350kw;
}

function tinhtien() {
    var user = document.getElementById("name").value;
    var numberKw = document.getElementById("sodien").value*1;
    var tongtien = 0;
    if(numberKw <= 50){
        tongtien = trong50kwdau(numberKw);
    }else if(numberKw <= 100){
        tongtien = khoang50den100kw(numberKw);
    }else if(numberKw <= 200){
        tongtien = khoangtu100den200kw(numberKw);
    }else if(numberKw <=350){
        tongtien = khoangtu200kwden350kw(numberKw);
    }else{
        tongtien =khoangtutren350kw(numberKw);
    }
    document.getElementById("result").innerHTML =`
    <h2>Tên người dùng:${user} - Tổng tiền:${tongtien.toLocaleString()} vnd</h2>
    `
}