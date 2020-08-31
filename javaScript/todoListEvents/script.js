const firstLI = document.querySelector("li");

firstLI.addEventListener("mouseover", () => {
  firstLI.style.color = "green";
})

firstLI.addEventListener("mouseout", () => {
  firstLI.style.color = "red";
})