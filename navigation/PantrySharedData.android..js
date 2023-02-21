import React, { createContext, useState } from 'react';
import { ingredient_details } from '../utils/IngredientDetailsFile';

// create a context
export const PantryContext = createContext();

// create a provider component
export const PantryProvider = ({ children }) => {
  const [pantryType, setPantryType] = useState('null');
  const [pantryTypeList, setPantryTypeList] = useState(null);
  const [ingredientList, setIngredientList] = useState(ingredient_details);
  const [recipeFilters, setRecipeFilters] = useState({
    diet: [],
    course: [],
    cuisine: [],
  });
  const [sortRecipe, setSortRecipe] = useState('prep-time-low');
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  return (
    <PantryContext.Provider value={{ pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList, recipeFilters, setRecipeFilters, sortRecipe, setSortRecipe, filteredRecipeList, setFilteredRecipeList }}>
      {children}
    </PantryContext.Provider>
  );
};
