const container = document.querySelector(".container")
const menuButton = document.querySelector(".menu-icon")
const closeButton = document.querySelector(".close-icon")

menuButton.addEventListener("click", () => {
  container.classList.add("show-nav")
})

closeButton.addEventListener("click", () => {
  container.classList.remove("show-nav")
})
