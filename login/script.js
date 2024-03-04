var signupbtn = document.querySelector("#signupbtn");
var signinbtn = document.querySelector("#signinbtn");
var namefield = document.querySelector("#namefield");
var title = document.querySelector("#title");
var para = document.querySelector("#para");


signinbtn.addEventListener("click", function(){
    namefield.style.maxHeight = "0";
    title.innerText = "Log In";
    signupbtn.style.backgroundColor = "rgb(193, 212, 216)";
    signinbtn.style.backgroundColor = "green";
    para.innerText = "Forgot password ?";
})

signupbtn.addEventListener("click", function(){
    namefield.style.maxHeight = "80px";
    title.innerText = "Sign Up";
    signupbtn.style.backgroundColor = "green";
    signinbtn.style.backgroundColor = "rgb(193, 212, 216)";
    para.innerText = "Note: Password will be atleast 8 characters";
})
