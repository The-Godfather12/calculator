function display(value) {
    document.getElementById("result").value += value;
};


//calculate button display
function calculate() {
    const p = document.getElementById("result").value;
    const q = eval(p);
    document.getElementById("result").value = q;
};


//clearscreen button display
function clearScreen() {
    document.getElementById('result').value = '';
};


//square button
function squaredisplay() {
    const p = document.getElementById ("result").value;
    document.getElementById("result").value = p ** 2;   
};


//squareroot button
function squarerootdisplay() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(p);


//cube display
};
function cubedisplay() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = Math.cbrt(3);
};


//sin display
function sin() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = Math.sin(p);
};