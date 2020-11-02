const lis = document.querySelectorAll("li");

lis.forEach(item => {
  item.addEventListener("mouseover", () => {
  item.classList.add("selected");
  })
})

lis.forEach(item => {
  item.addEventListener("mouseout", () => {
  item.classList.remove("selected");
  })
})

lis.forEach(item => {
  item.addEventListener("click", () => {
  item.classList.toggle("done");
  })
})