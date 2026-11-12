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
};