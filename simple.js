const colours = ['springgreen', 'yellow', 'red', 'blue', 'green']

const btn = document.querySelector('.click')
const color = document.querySelector('.color')
const defaultColor = color.textContent
document.body.style.backgroundColor = defaultColor

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colours[randomNumber]
    color.textContent = colours[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colours.length)
}