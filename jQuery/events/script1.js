// $("h1").click(() => {
//   alert("h1 clicked!")
// })

$("button").click(function() {
  $(this).css("background", "pink")
})

$("button").click(function() {
  const text = $(this).text();
  console.log(`You clicked ${text}`);
})

// $("input[type='text']").keypress(function() {
//   console.log("YOU PRESSED A KEY!")
// })

$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    alert("You HIT ENTER")
  }
})

$("h1").on("click", function() {
  $(this).css("color", "purple");
});

// $("input").on("keypress", function(){
//   console.log("KeyPressed!")
// })

$("button").on("mouseenter", function(){
  $(this).css("font-weight", "700");
})

$("button").on("mouseleave", function(){
  $(this).css("font-weight", "400");
})