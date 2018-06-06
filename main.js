function solveMath() {
    var math = document.getElementById("mathToSolve").value;
    var answer = eval(math);
    document.getElementById("mathAnswer").innerHTML = answer;
}
