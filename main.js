

(function () {
    let calculatorscreen = document.getElementById("calculatorscreen");
    let buttons = document.querySelectorAll(".btnnum");
    let clear = document.getElementById("clear");
    let equal = document.getElementById("equal");


    buttons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            calculatorscreen.innerHTML += value;
        });
    });

    equal.addEventListener('click', function (e) {
        if (calculatorscreen.innerHTML === "") {
            calculatorscreen.innerHTML = "";
        } else {
            let answer = eval(calculatorscreen.innerHTML);
            calculatorscreen.innerHTML = answer;
        }
    });
    clear.addEventListener('click', function (e) {
        calculatorscreen.innerHTML = ""
    })
})();


