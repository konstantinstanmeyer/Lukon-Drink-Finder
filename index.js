fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin/drinks')
    .then(response => response.json())
    .then(ginData => {
        console.log(ginData)
    })



document.querySelector('#home').addEventListener('click', e => {
    alert('HOME: PAGE NOT FOUND')
})

document.querySelector('#about-us').addEventListener('click', e => {
    alert('ABOUT-US: PAGE NOT FOUND')
})

document.querySelector('#services').addEventListener('click', e => {
    alert('SERVICES: PAGE NOT FOUND')
})

document.querySelector('#contact').addEventListener('click', e => {
    alert('CONTACT: PAGE NOT FOUND')
})

document.getElementById('recipe-button').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.blurred-background').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.blurred-background').style.display = 'none';
})