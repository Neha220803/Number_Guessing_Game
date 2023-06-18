var u_ans = 0;
document.getElementById("add").onclick = function () {
    u_ans = document.getElementById("inp").value;
    var g_ans = Math.floor(Math.random() * 10) + 1;
    if (u_ans == g_ans) {
        alert("Your Guess was Correct!!");
    }
    else {
        alert("Your Guess was incorrect\nPlease try again!\nThe Generated answer is = " + g_ans)
    }
}