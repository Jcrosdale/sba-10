// Navbar

// Import
import { NavLink, useNavigate } from 'react-router-dom';
//import { useContext } from 'react';
//import { FavoritesContext } from '../context/FavoritesContext';

export default function Navbar() {

    //const { isFavorite } = useContext(FavoritesContext);
    //const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to ='/category'>Category</NavLink></li>
                <li><NavLink to='/recipe'>Recipe</NavLink></li>
                <li><NavLink to='/favorites'>Favorites</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
            </ul>
        </nav>
    )
}


