// Imports
import type { Recipe } from '../types';
import { useFavorites } from '../context/FavoritesContext';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
    
    // Check if recipe ID exists in favorites array
    const favorite = isFavorite(recipe.idMeal);

    // Toggle function
    const handleFavorite = () => {
        if (favorite) {
            removeFavorite(recipe.idMeal);
        } else {
            addFavorite(recipe.idMeal);
        }
    };

    return(
        <div className='recipe-card'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <button onClick={handleFavorite}>
                {favorite ? 'Remove Favorite' : 'Add Favorite'}
            </button>
        </div>
    );
};

export default RecipeCard;