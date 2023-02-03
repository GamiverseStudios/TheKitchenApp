import { PantryContext } from "./PantrySharedData.android.";
import { useContext } from "react";
import Alert, {FlatList,View, Text} from 'react-native';
import PantryCard from "./PantryCard";

const PantryIngredientsManager = () => {
    const {pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList} = useContext(PantryContext);

    const filteredIngredients = [];
    //console.log("The ingredientList is : ",ingredientList);
    
    ingredientList.map((item) => {
        if (item.category == pantryType) {
            filteredIngredients.push(item);
        }
      });

      console.log("Clicked ingredents are ", filteredIngredients);
            
    return (

            <FlatList 
                scrollEnabled = {true}
                horizontal= {true}
                data={filteredIngredients}
                keyExtractor={item=>item.name}
                    renderItem={(item) => {
                    return( 
                   <View><Text>{item.name}</Text></View>)
            }}/>)
}

export default PantryIngredientsManager;