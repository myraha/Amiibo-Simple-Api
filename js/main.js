$("button").on("click",function(){
  var amiibo = $("#lookUp").val()
  var apiUrl = "http://www.amiiboapi.com/api/amiibo/?character="+ amiibo
  $.ajax({
    url:apiUrl,

    success: function(response){
      var game = response.amiibo
      console.log(response);
      game.forEach(function(peach){
        $("img").attr("src",peach.image)

      })

    },
    error:function(err){
      console.log("error")
    }
  });
});
