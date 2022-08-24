fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then(response => response.json())
    .then(ginData => {
        grabId(ginData)
    })

function grabId(data){
    let drinkIds = [];
    let grabbedPics = [];
    let drinkNames = [];
    for(let i=0; i < 20; i++){
        if(i < 20){
            const element = data['drinks'][i]['idDrink'];
            drinkIds.push(element);
        } else {
            return drinkIds;
        }
    }
    for(let i=0; i < 20; i++){
        if(i < 20){
            const element = data['drinks'][i]['strDrink']
            drinkNames.push(element);
        } else {
            return drinkNames;
        }
    }
    console.log(drinkIds);
    console.log(drinkNames)
};

function getInfo(newArray){
    let passedRecipe = [];
    let passedMeasure = [];
    let ingredients = [];
};
getInfo();

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
let heartValue = false;
document.getElementById('heart').addEventListener('click', e => {
    e.preventDefault();
    heartValue = !heartValue
    
    console.log(heartValue)
})