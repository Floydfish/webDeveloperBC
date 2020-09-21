// Check Off Specific Todos By Cliking
$("li").click(function(){
  if ($(this).css("color") === "gray") {
    $(this).css({
      textDecoration: "line-through",
      color: "gray",})
  } else {
    $(this).css({
      textDecoration: "line-through",
      color: "gray",
    })
  }
})