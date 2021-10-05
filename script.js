const button_dark = document.querySelector ('[data-button]')
const body = document.querySelector ('body')


button_dark.addEventListener('click', function() {
    body.classList.toggle("dark_mode")


    const title = document.querySelectorAll( ".color_dark_text")
    Array.prototype.forEach.call(title, function(title){
        title.classList.toggle('color_dark')

    })

    const saberMais = document.querySelectorAll (".button_saibaMais")
        Array.prototype.forEach.call(saberMais, function(saberMais){
            saberMais.classList.toggle('button_dark_saberMais')
        })



})


