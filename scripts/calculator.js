$(document).ready(function() {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    const username = getQueryParam("username");

    if (username) {
        $("#username").text(username);
    }

    var num1, num2;
    var isNum1Valid, isNum2Valid;

    const calculate = (operation) => {
        if (isNum1Valid && isNum2Valid){
            let result;
            switch(operation){
                case "add":
                    result = num1 + num2;
                    $("#operation-p").text("+");
                    break;
                case "subtract":
                    result = num1 - num2;
                    $("#operation-p").text("-");
                    break;
                case "multiply":
                    result = num1 * num2;
                    $("#operation-p").text("x");
                    break;
                case "divide":
                    result = num2!==0? num1 / num2: "Cannot divide by zero";
                    $("#operation-p").text("/");
                    break;
                default:
                    result = "Invalid operation";
            }
            $("#result").val(result);
        }
        else{
            $("#result").val("0");
            $("#operation-p").text(",");
            if (!isNum1Valid)$(".error-num1").show();
            if (!isNum2Valid)$(".error-num2").show();
        }
    }

    $("#add").on("click", () => calculate("add"));
    $("#subtract").on("click", () => calculate("subtract"));
    $("#multiply").on("click", () => calculate("multiply"));
    $("#divide").on("click", () => calculate("divide"));


    $("#num1").on("input", function(){
        const num1Value = $("#num1").val().trim();
        if (num1Value === "" || isNaN(parseFloat(num1Value))) {
            isNum1Valid = false;
            $(".error-num1").show();
        } else {
            isNum1Valid = true;
            num1 = parseFloat(num1Value);
            $(".error-num1").hide();
        }
    });

    $("#num2").on("input", function(){
        const num2Value = $("#num2").val().trim();
        if (num2Value === "" || isNaN(parseFloat(num2Value))) {
            isNum2Valid = false;
            $(".error-num2").show();
        } else {
            isNum2Valid = true;
            num2 = parseFloat(num2Value);
            $(".error-num2").hide();
        }
    });

    $("#resetBtn").on("click", () => {
        $("#num1").val("");
        $("#num2").val("");
        $("#result").val("0");
        isNum1Valid = false;
        isNum2Valid = false;
        $("#operation-p").text(",");
    })

    $("#logout").on("click", function(event) {
        event.preventDefault();
        window.location.href = 'login.html';
    });

    $("#toStopwatch").on("click", function(event) {
        event.preventDefault();
        const username = $("#username").text();
        window.location.href = `stopwatch.html?username=${encodeURIComponent(username)}`;
    });
});