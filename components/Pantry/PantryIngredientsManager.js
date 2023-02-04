import { PantryContext } from "../../navigation/PantrySharedData.android.";
import { useContext, useState } from "react";
import Alert, {FlatList,View, Text, TouchableOpacity} from 'react-native';
import PantryCard from "./PantryCard";

const PantryIngredientsManager = () => {
    const {pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList} = useContext(PantryContext);

    const [refreshState, setRefreshState] = useState(false);
    const pantryTypeIngredientList = [];

    //console.log("The ingredientList is : ",ingredientList);
    ingredientList.map((item) => {
        if (item.category == pantryType) {
            pantryTypeIngredientList.push(item);
        }
      });
    
      const onSelect = (ind) => {
            pantryTypeIngredientList.map((item) => {
                if(item.name == ind) {
                    item.isSelected = !item.isSelected;
                }
            });
            setRefreshState(!refreshState);
      }
    
      return (<View>
        {ingredientList.length == 0 ? (<View></View>) : (
            <View style={{margin : 30}}>
            <FlatList 
                contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
                data={pantryTypeIngredientList}
                keyExtractor={item=>item.name}
                    renderItem={({item}) => {
                    return( 
                   <View style={{flex: 1, flexDirection: "row", alignContent: 'center', padding : 3}}>
                        <TouchableOpacity 
                            style = {{borderColor: 'black', borderWidth: 1, padding : 5, borderRadius : 10, backgroundColor : item.isSelected ? '#FDD4D7' : 'white'}}
                            onPress = {() => onSelect(item.name)}> 
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