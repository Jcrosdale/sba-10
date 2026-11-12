// Interfaces
export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb:string;
}

export interface RecipeDetails extends Recipe {
    strInstructions: string;
    strCategory: string;
    strArea: string;

}