const button_dark = document.querySelector ('[data-button]')
const body = document.querySelector ('body')

button_dark.addEventListener('click', function() {
    body.classList.toggle("dark_mode")
})

