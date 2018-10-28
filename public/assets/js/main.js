console.log("Main.js has loaded")


$(document).ready(function(){




    $(".eatBurger").on("click",function(){
        console.log("Eat a burger has been pressed")
    
    
    });


    $("#addBurger").on("submit",function(event){
        event.preventDefault();

        console.log("Add Burger has been submitted")
    
    
    })
    



})


