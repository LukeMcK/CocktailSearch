import React from 'react';

const DrinkCard = ({drink}) => {
    return (
        <div className ="drink">
            <a href={`https://www.google.com/search?q=${drink.strDrink} cocktail/drink recipe`} target = "_blank">
                <div>
                        <p>{drink.strGlass}</p>
                </div>
                <div>   
                    <img src = {drink.strDrinkThumb || 'https://via.placeholder.com/400'} alt= {drink.strDrink} /> 
                </div>
                <div>
                    <span>{drink.strCategory}</span>
                    <h3>{drink.strDrink}</h3>
                </div>
            </a>
        </div>
    )
}

export default DrinkCard;