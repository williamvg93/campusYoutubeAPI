let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')

console.log(sidebar);

menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}