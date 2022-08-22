fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })