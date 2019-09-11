app.controller('profileCtrl',[profileCtrl])

function profileCtrl(){
    var becario = document.getElementById("becario");
    var junior = document.getElementById("junior");
    var medio = document.getElementById("medio");
    var senior = document.getElementById("senior");
    becario.addEventListener('click',function(){
        becario.classList.add("selected");
        document.querySelector("#becario-log").classList.add("show");
        document.querySelector("#becario-log").classList.remove("hide");
        document.querySelector("#junior-log").classList.remove("show");
        document.querySelector("#medio-log").classList.remove("show");
        document.querySelector("#senior-log").classList.remove("show");
        document.querySelector("#junior-log").classList.add("hide");
        document.querySelector("#medio-log").classList.add("hide");
        document.querySelector("#senior-log").classList.add("hide");
        junior.classList.remove("selected");
        medio.classList.remove("selected");
        senior.classList.remove("selected");
    
    })
    junior.addEventListener('click',function(){
        junior.classList.add("selected");
        document.querySelector("#junior-log").classList.add("show");
        document.querySelector("#junior-log").classList.remove("hide");
        document.querySelector("#becario-log").classList.remove("show");
        document.querySelector("#medio-log").classList.remove("show");
        document.querySelector("#senior-log").classList.remove("show");
        document.querySelector("#becario-log").classList.add("hide");
        document.querySelector("#medio-log").classList.add("hide");
        document.querySelector("#senior-log").classList.add("hide");
        becario.classList.remove("selected");
        medio.classList.remove("selected");
        senior.classList.remove("selected");
    })
    medio.addEventListener('click',function(){
        medio.classList.add("selected");
        document.querySelector("#medio-log").classList.add("show");
        document.querySelector("#medio-log").classList.remove("hide");
        document.querySelector("#junior-log").classList.remove("show");
        document.querySelector("#becario-log").classList.remove("show");
        document.querySelector("#senior-log").classList.remove("show");
        document.querySelector("#junior-log").classList.add("hide");
        document.querySelector("#becario-log").classList.add("hide");
        document.querySelector("#senior-log").classList.add("hide");
        junior.classList.remove("selected");
        becario.classList.remove("selected");
        senior.classList.remove("selected");
    })
    senior.addEventListener('click',function(){
        senior.classList.add("selected");
        document.querySelector("#senior-log").classList.add("show");
        document.querySelector("#senior-log").classList.remove("hide");
        document.querySelector("#junior-log").classList.remove("show");
        document.querySelector("#medio-log").classList.remove("show");
        document.querySelector("#becario-log").classList.remove("show");
        document.querySelector("#junior-log").classList.add("hide");
        document.querySelector("#medio-log").classList.add("hide");
        document.querySelector("#becario-log").classList.add("hide");
        junior.classList.remove("selected");
        medio.classList.remove("selected");
        becario.classList.remove("selected");
    })

    
}