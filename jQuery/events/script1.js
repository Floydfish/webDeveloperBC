$("h1").click(() => {
  alert("h1 clicked!")
})

$("button").click(function() {
  $(this).css("background", "pink")
})

$("button").click(function() {
  const text = $(this).text();
  console.log("You clicked " + text);
})