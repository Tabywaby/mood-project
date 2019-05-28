$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
         happymood();
        
        
        
    } else if(input==="angry"){
        angrymood();
        
    }else if(input==="annoyed"){
        annoyedmood();
    }else if(input==="excited"){
        excitedmood();
        
    }else{
     alert("Please enter happy, annoyed, angry or excited");   
    }
});
function changeBackground(backgroundcolor){
    $('body').css('background-color',backgroundcolor);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}

function happymood(){
    changeBackground("pink");
    changeTextColor("red");
    displayImage("https://media.tenor.com/images/22e290b83302a51a2aed2710a2c2e23d/tenor.gif");
}
function angrymood(){
    changeBackground("black");
    changeTextColor("red");
    displayImage("https://vignette.wikia.nocookie.net/scratchpad/images/8/8d/Io_Anger_profile.jpg/revision/latest?cb=20150801022141");
}
function annoyedmood(){
    changeBackground("grey");
    changeTextColor("#f44242");
    displayImage("https://charactier.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-09-at-12.54.49-PM.png");
}
function excitedmood(){
    changeBackground("#0d99e5");
    changeTextColor("purple");
    displayImage("https://i.pinimg.com/236x/0a/b6/8d/0ab68d1a110c160dbf802b111c06f300.jpg");

}
var mood = ["",""]; 

