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
    let resultsList = document.querySelector('.results-wrapper');
    resultsList.innerHTML = '';
    data.forEach(id => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(genData => {
            console.log(genData)
            let item = document.createElement('div');
            let imageContainer = document.createElement('div');
            let image = document.createElement('img');
            let drinkName = document.createElement('h3');
            let recipeButton = document.createElement('a');
            item.classList.add('results');
            image.classList.add('drink-pic');
            drinkName.classList.add('drink-name');
            recipeButton.id = "recipe-button";
            imageContainer.classList.add('image-result');
            image.src = `${genData['drinks'][0]['strDrinkThumb']}`
            image.classList.add('drink-picture')
            imageContainer.appendChild(image)
            item.appendChild(imageContainer);
            item.appendChild(drinkName)
            item.appendChild(recipeButton)
            resultsList.appendChild(item);
            recipeButton.textContent = "click for recipe"
            recipeButton.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector('.blurred-background').style.display = 'flex';
                recipeText.textContent = `${genData['drinks'][0]['strInstructions']}`
                drinkName2.textContent = `${genData['drinks'][0]['strDrink']}`
            })
            document.querySelector('.close').addEventListener('click', e => {
                document.querySelector('.blurred-background').style.display = 'none';
            })
            drinkName.textContent = `${genData['drinks'][0]['strDrink']}`
            console.log(genData['drinks'][0]['strInstructions'])
        })
    })
}

{/* <div class="results">
    <div class="image-result">
        <img class="drink-pic" src="https://pngitem.com/pimgs/m/147-1473539_tequila-bottles-png-patron-tequila-silver-png-transparent.png">
    </div>
    <h3 class="drink-name">Time to Party</h3>
    <a id="#recipe-button">click for recipe</a>
</div> */}

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
    }
)

document.querySelector('#about-us').addEventListener('click', e => {
    alert('ABOUT-US: PAGE NOT FOUND')
})

document.querySelector('#services').addEventListener('click', e => {
    alert('SERVICES: PAGE NOT FOUND')
})

document.querySelector('#contact').addEventListener('click', e => {
    alert('Connect with the creators on LinkedIn... https://www.linkedin.com/in/luke-chamley/ | https://www.linkedin.com/in/konstantin-stanmeyer/ ')
})

document.getElementById('recipe-button').addEventListener('click', e => {
    e.preventDefault();
    console.log('yes')
    document.querySelector('.blurred-background').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', e => {
    document.querySelector('.blurred-background').style.display = 'none';
})