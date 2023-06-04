function signin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email.length === 0 || password.length === 0){
        alert("Email and Password must be filled")
    }
    else if(email === "farhanmandito@kebab.co.id" && password === "farhantukangsuruh"){
        alert("Sign In Successfully!")
        window.location.href = "index.html"
    }
    else{
        alert("Email or Password incorrect!")
    }
}

function signup(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if(email.length === 0 || password.length === 0 || confirm_password.length === 0){
        alert("Email and Password must be filled");
    }
    else{
        alert("Sign Pp Sucessfully!")
        window.location.href = "sign_in.html"
    }
}