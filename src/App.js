import {useState, useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'
import DrinkCard from './DrinkCard'

const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const App = () => {
    const [drinks, setDrinks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyPress = (event,title) => {
        if(event.key === "Enter"){
            searchDrinks(title);
        }
    }

    const searchDrinks = async (title) => {
        const response = await fetch(`${API_URL}${title}`)
        const data = await response.json();

        setDrinks(data.drinks)
    }

    useEffect(()=>{
        searchDrinks('');
    },[])

    return (
        <div className ="app">
            <h1>Powered By TheCocktailDB</h1>

            <div className="search">
                <input 
                placeholder = "What Will You Be Having?"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                onKeyDown = {(e)=>handleKeyPress(e,searchTerm)}
                />
                <img 
                src ={SearchIcon} 
                alt ="search"
                onClick={()=>searchDrinks(searchTerm)}>
                </img>
            </div>

            {drinks?.length > 0 ? (
                <div className="container">
                    {drinks.map((drink) => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No drinks found</h2>
                </div>
            )}


            
        </div>
    );
}

export default App;