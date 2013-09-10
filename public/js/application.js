$(document).ready(function(){

  $('#get_color').on("click", function(){

    $.ajax({
      dataType: 'json',
      url: "/color",
      type: "post"
    }).done(function(response){
      $('li:nth-child('+ response.value+')').css('background-color', response.color);
    }).fail(function(){
      console.log('fail!');
    });

  });

});