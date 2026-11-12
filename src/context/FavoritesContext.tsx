// Imports
import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Interface context
interface FavoritesContextType {
    favorites: string[];
    addFavorite: (id: string) => void; // accepts a string and returns nothing
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

// Context
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Provider
export const FavoritesProvider = ({ children }: {children: React.ReactNode }) => {
    // Store favorite recipe IDs in state and localStorage
    // Empty array is the initial value
    const [favorites, setFavorites] = useLocalStorage<string[]>(
        'favorites', []
    );
    // Adds a recipe ID to favorites
    const addFavorite = (id: string) => {
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id]);
        }
    };
    // Remove a recipe ID from favorites
    const removeFavorite = (id: string) => {
        setFavorites(favorites.filter(favoriteId => favoriteId !== id));
    };
    // Check if favorited
    const isFavorite = (id: string) => {
        return favorites.includes(id);
    };
    // Provide state and functions to child components
}