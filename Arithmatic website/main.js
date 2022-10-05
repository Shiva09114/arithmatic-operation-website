function add() {
    var num1, num2 = 0;
    if (document.getElementById('Anumber1').value && document.getElementById('Anumber2').value) {
        num1 = parseInt(document.getElementById('Anumber1').value);
        num2 = parseInt(document.getElementById('Anumber2').value);
        var s = num1 + num2;
        document.getElementById('Aresult').innerHTML = "The Result Of Addition Of Two Given Number :" + s;
    }
    else {
        document.getElementById('Aresult').innerHTML = "Please input two  valid numbers";
    }
}
function div() {
    num1 = parseInt(document.getElementById('Dnumber1').value);
    num2 = parseInt(document.getElementById('Dnumber2').value);
    s = num2 / num1;
    document.getElementById('Dresult').innerHTML = "The Result Of Addition Of Two Given Number :" + s;
}
function Mul() {
    num1 = parseInt(document.getElementById('Mnumber1').value);
    num2 = parseInt(document.getElementById('Mnumber2').value);
    s = num1 * num2;
    document.getElementById('Mresult').innerHTML = "The Result Of Multiplication Of Two Given Number :" + s;
}
function sub() {
    num1 = parseInt(document.getElementById('Snumber1').value);
    num2 = parseInt(document.getElementById('Snumber2').value);
    s = num1 - num2;
    document.getElementById('Sresult').innerHTML = "The Result Of Addition Of Two Given Number :" + s;
}