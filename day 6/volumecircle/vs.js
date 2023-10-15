function vol() {
    let result;
    let number = document.getElementById("num").value;
    result = 4 / 3 * 3.1415 * number * number * number;
    document.getElementById("res").innerHTML = result;
    
}