function vol() {
    let result;
    let number = document.getElementById("num").value;
    if (number % 2 == 0) 
    {
        result = "Even";
    } 
    else 
    {
        result = "Odd";
    }
    document.getElementById("res").innerHTML = result;
    
}