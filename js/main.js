let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')

console.log(sidebar);

menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
}