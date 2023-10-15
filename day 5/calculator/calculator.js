function calc(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let opr = document.getElementById("opr").value;
    let result;
    if (opr == "+"){
        result = parseFloat(number1) + parseFloat(number2);
        document.getElementById("res").innerHTML = result;
    }
    else if (opr == "-"){
        result = parseFloat(number1) - parseFloat(number2);
        document.getElementById("res").innerHTML = result;
    }
    else if (opr == "*"){
        result = parseFloat(number1) * parseFloat(number2);
        document.getElementById("res").innerHTML = result;
    }
    else if (opr == "/"){
        result = parseFloat(number1) / parseFloat(number2);
        document.getElementById("res").innerHTML = result;
    }
    else if (opr == "%"){
        result = parseFloat(number1) % parseFloat(number2);
        document.getElementById("res").innerHTML = result;
    }
    else{
        result = 'Invalid Operator';
        document.getElementById("res").innerHTML = result;  
    }
}