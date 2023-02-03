import { PantryContext } from "./PantrySharedData.android.";
import { useContext } from "react";
import Alert, {FlatList,View, Text, TouchableOpacity} from 'react-native';
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
    
      return (<View>
        {ingredientList.length == 0 ? (<View></View>) : (
            <View style={{margin : 30}}>
            <FlatList 
                contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
                data={filteredIngredients}
                keyExtractor={item=>item.name}
                    renderItem={({item}) => {
                    return( 
                   <View style={{flex: 1, flexDirection: "row", alignContent: 'center', padding : 3}}>
                        <TouchableOpacity style = {{borderColor: 'black', borderWidth: 1, padding : 5, borderRadius : 10}}> 
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                   </View>)
            }} />
            </View>
            )
         }   

      </View>
)

}

export default PantryIngredientsManager;