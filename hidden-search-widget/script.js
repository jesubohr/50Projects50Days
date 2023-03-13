const searchInput = document.querySelector(".search-input")
const searchButton = document.querySelector(".search-button")

searchButton.addEventListener("click", (ev) => {
  if (ev.eventPhase === 2) return
  searchInput.focus()
})
