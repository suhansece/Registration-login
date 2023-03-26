var signupBtn=document.getElementById("signupBtn");
var signinBtn=document.getElementById("signinBtn");
var nameField=document.getElementById("nameField");
var title=document.getElementById("title")
var lostPassword=document.getElementById("lostPassword")

signinBtn.onclick =function(){
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    lostPassword.style.fontSize="0";
}
signupBtn.onclick =function(){
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    lostPassword.style.fontSize="14px";
}