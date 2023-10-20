let result = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let price;

let totalprice = 0;


function countp(){
    result++;
    totalprice += 20;
    document.getElementById("res").innerHTML = result;
    document.getElementById("totalprice").innerHTML = "Total Amount: "+totalprice;

}

function countm(){
    result--;
    totalprice -= 20;
    document.getElementById("res").innerHTML = result;
    document.getElementById("totalprice").innerHTML = "Total Amount: "+totalprice;
}

function countp2(){
    result2++;
    totalprice += 20;
    document.getElementById("res2").innerHTML = result2;
    document.getElementById("totalprice").innerHTML = "Total Amount: "+totalprice;
}

function countm2(){
    result2--;
    totalprice -= 20;
    document.getElementById("res2").innerHTML = result2;
    document.getElementById("totalprice").innerHTML = "Total Amount: "+totalprice;
}

function countp3(){
    result3++;
    totalprice += 20;
    document.getElementById("res3").innerHTML = result3;
    document.getElementById("totalprice").innerHTML = "Total Amount: "+totalprice;
}

function countm3(){
    result3--;
    totalprice -= 20;
    document.getElementById("res3").innerHTML = result3;
    document.getElementById("totalprice").innerHTML = "Total Amount: "+totalprice;
}

