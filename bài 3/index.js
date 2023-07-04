function thunhapthue(total,person){
    var phithue = 0;
    if(total <= 60*10**6){
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.05;
    }else if(total <= 120*10**6){
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.1;
    }else if( total <= 210*10**6){
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.15;
    }else if(total <= 384*10**6){
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.2;
    }else if(total <= 624*10**6){
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.25;
    }else if(total <= 960*10**6){
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.3;
    }else{
        phithue = (total - 4*10**6 - person * 1.6*10**6)*0.35;
    }
    return phithue;
}



function tinhthue(){
    var user = document.getElementById("username").value;
    var total = document.getElementById("totalincome").value*1;
    var person = document.getElementById("dependentperson").value*1;
    var tongtienthue = thunhapthue(total,person);
    // console.log({user,tongtienthue});
    document.getElementById("result").innerHTML = `
    <h2 class="text-danger">Họ tên ${user}-Tiền thuế thu nhập cá nhân:${tongtienthue.toLocaleString()}VND</h2>
    `
}
