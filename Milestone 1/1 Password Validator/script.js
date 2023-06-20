function validatePassword() {
    var PasswordInput=document.getElementById("password");
    var confirmPasswordInput=document.getElementById("connfirmPass");
    var dateValidation=document.getElementById("final-result");

    var password=PasswordInput.value;
    var confirmPassword=confirmPasswordInput.value;

    if (password === confirmPassword){
       dateValidation.innerText=  "Password Matched. Password validation Successful.";
       dateValidation.style.color="green"
    }else {
        console.log(dateValidatiom)
        dateValidation.innerText= "Password didn't match. Password validation unsuccessful";
        dateValidation.style.color="red";
    }
}



