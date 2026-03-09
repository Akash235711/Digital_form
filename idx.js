let validname = document.querySelector("#valid-name");
let nameRegex = /^[a-zA-Z\s]{3,30}$/;
let validemail = document.querySelector("#valid-email");
let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
let validNum = document.querySelector("#valid-number");
let phoneRegex = /^[0-9]{11}$/;
let validpass = document.querySelector("#valid-pass");
let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/;
let resetpass = document.querySelector("#valid-repass");
let submitbtn = document.querySelector("#btn1");
submitbtn.addEventListener("click",function(){
    if(!nameRegex.test(validname.value)){
        document.querySelector(".validn").style.display = "block";
         document.querySelector(".name input").style.color = "red";
    }
    else {
        document.querySelector(".validn").style.display = "none";
        document.querySelector(".name input").style.color = "green";
    }
    if(!emailRegex.test(validemail.value)){
        document.querySelector(".validm").style.display = "block";
         document.querySelector(".E-mail input").style.color = "red";
    }
    else {
        document.querySelector(".validm").style.display = "none";
        document.querySelector(".E-mail input").style.color = "green";
    }
     if(!phoneRegex.test(validNum.value)){
        document.querySelector(".validp").style.display = "block";
         document.querySelector(".phone input").style.color = "red";
    }
    else {
        document.querySelector(".validp").style.display = "none";
        document.querySelector(".phone input").style.color = "green";
    }
    if(!passregex.test(validpass.value)){
        document.querySelector(".validpa").style.display = "block";
         document.querySelector(".Password input").style.color = "red";
    }
    else {
        document.querySelector(".validpa").style.display = "none";
        document.querySelector(".Password input").style.color = "green";
    }
    if(resetpass.value !== validpass.value){
        document.querySelector(".validpas").style.display = "block";
         document.querySelector(".Repeat-Password input").style.color = "red";
    }
    else {
        document.querySelector(".validpas").style.display = "none";
        document.querySelector(".Repeat-Password input").style.color = "green";
    }
    document.querySelector(".container").style.display = "none";
    document.querySelector(".last-msg").style.display = "block";
})
let resetbtn = document.querySelector("#btn2");
resetbtn.addEventListener("click",function(){
    document.querySelector("form").reset();
     document.querySelector("#chng").textContent = "10";
      document.querySelectorAll(".validn,.validm,.validp,.validpa,.validpas")
    .forEach(el => el.style.display = "none");
})