
const drinkName = document.querySelector('.drink-name')
const recipeText = document.querySelector('.recipe-text')
const drinkPic = document.querySelector('.drink-pic')
const vodka = document.querySelector('#vodka')
const whiskey = document.querySelector('#whiskey')
const rum = document.querySelector('#rum')
const tequila = document.querySelector('#tequila')
const drinkName2 = document.querySelector('.clicked-drink')


function grabId(data){
    let drinkIds = [];
    for(let i=0; i < 3; i++){
        if(i < 20){
            const element = data['drinks'][i]['idDrink'];
            drinkIds.push(element);
        } else {
            return drinkIds;
        }
    }
    calledFun(drinkIds);
};

function calledFun(data){
data.forEach(id => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(genData => {
        drinkName.textContent = `${genData['drinks'][0]['strDrink']}`
        recipeText.textContent = `${genData['drinks'][0]['strInstructions']}`
        drinkPic.src = `${genData['drinks'][0]['strDrinkThumb']}`
        drinkName2.textContent = `${genData['drinks'][0]['strDrink']}`
        

    })})
}

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey')
    .then(response => response.json())
    .then(whiskeyData => {
        whiskey.addEventListener('click', (e) => {
            e.preventDefault
            grabId(whiskeyData);
        })   
})

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila')
    .then(response => response.json())
    .then(tequilaData => {
        tequila.addEventListener('click', (e) => {
            e.preventDefault
            console.log('hello')
            grabId(tequilaData)
        })
})

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
    .then(response => response.json())
    .then(rumData => {
        rum.addEventListener('click', (e) => {
            e.preventDefault
            console.log('hello')
            grabId(rumData)
        })
})


fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
    .then(response => response.json())
    .then(vodkaData => {
        vodka.addEventListener('click', (e) => {
            e.preventDefault
            console.log('hello')
            grabId(vodkaData)
        })
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

document.getElementById('#recipe-button').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.blurred-background').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.blurred-background').style.display = 'none';
})
