let power = "On";
let currentClip = "";
let color = "lime";
let vid = document.getElementById("");

$(document).ready(function() {
  
  $('#slider').on("input",function() {
    let volValue = $(this).val();
    //console.log(volValue);
    
    let elements = $(".clip");
    
    elements.each(function(index,audio){
      audio.volume = volValue / 100;
    });
    
  });
  
  
  $("button").on('click',function(){
    var key = $(this).attr('id');
    //var drumPad = $(this).find('audio').attr('id'); 
    if(key === "power-button"){
      
      if(power==="On"){
        power = "Off";
        $('#power-button').css("color","red");
      }else{
        power = "On";
        $('#power-button').css("color","lime");
      }
      $('#power-button').text(power);
    }
    
    if(power === "On" && key !== "power-button"){
      $('#clip-frame').text(key);
      var drumPad = $(this).find('audio').attr('id');
      document.getElementById(drumPad).play();
    }
    
    //console.log(drumPad);
  });

  $(document).keypress(function(event){
    var keypressed = String.fromCharCode(event.which).toUpperCase();
    //console.log(keypressed);
    if(power === "On"){  
      document.getElementById(keypressed).play();
    }
  }); 
});