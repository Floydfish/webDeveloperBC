// Check Off Specific Todos By Cliking
$("li").click(function(){
  $(this).toggleClass("completed");
})

//Click on X to delete todo
$("span").click(function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove(); //different this, this is the this.parent
  });
  e.stopPropagation();
})