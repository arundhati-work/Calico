var emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
var usernameRegex = /^[a-zA-Z0-9_]{5,50}$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*.,]).{8,50}$/;
var password ="";

var isEmailValid = false;
var isUsernameValid = false;
var isPasswordValid = false;
var isConfirmPasswordValid = false;

$(document).ready(function (){

    function checkFormValidity(){
        if (isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid){
            $("#loginBtn").prop("disabled", false);
        }
        else{
            $("#loginBtn").prop("disabled", true);
        }
    }

    $("#email").on("input", function(){
        let email = $(this).val();
        if (email === "" || !emailRegex.test(email)){
            $(".error-email").show();
        }else{
            $(".error-email").hide();
            isEmailValid = true;
        }
        checkFormValidity();
    });

    $("#username").on("input", function(){
        let username = $(this).val();
        if (username === "" || !usernameRegex.test(username)){
            $(".error-username").show();
        }else{
            $(".error-username").hide();
            isUsernameValid = true;
        }
        checkFormValidity();
    });

    $("#password").on("input", function(){
        password = $(this).val();
        if (password === "" || !passwordRegex.test(password)){
            $(".error-password").show();
        }else{
            $(".error-password").hide();
            isPasswordValid = true;
        }
        checkFormValidity();
    });

    $("#confirmPassword").on("input", function(){
        confirmPassword = $(this).val();
        if (confirmPassword === "" || confirmPassword !== password){
            $(".error-confirmPassword").show();
        }else{
            $(".error-confirmPassword").hide();
            isConfirmPasswordValid = true;
        }
        checkFormValidity();
    });

    $("#loginBtn").on("click", function(event) {
        event.preventDefault();
        const username = $("#username").val();
        window.location.href = `calculator.html?username=${encodeURIComponent(username)}`;
    });
});