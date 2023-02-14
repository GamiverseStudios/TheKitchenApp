import React, { createContext, useState } from 'react';
import { ingredient_details } from '../utils/IngredientDetailsFile';

// create a context
export const PantryContext = createContext();

// create a provider component
export const PantryProvider = ({ children }) => {
  const [pantryType, setPantryType] = useState('null');
  const [pantryTypeList, setPantryTypeList] = useState(null);
  const [ingredientList, setIngredientList] = useState([]);

  return (
    <PantryContext.Provider value={{ pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList }}>
      {children}
    </PantryContext.Provider>
  );
};
