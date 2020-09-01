const lis = document.querySelectorAll("li");

lis.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.color = "green";
  })
})

lis.forEach(item => {
  item.addEventListener("mouseout", () => {
    item.style.color = "black";
  })
})

lis.forEach(item => {
  item.addEventListener("click", () => {
    item.style.toggle = "done";
  })
})