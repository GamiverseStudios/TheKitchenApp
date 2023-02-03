


import { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import PantryCard, { clickedValue } from "./PantryCard";
import { ScrollView } from "react-native";
import { PantryProvider, PantryContext} from "./PantrySharedData.android.";
import { FlatList } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import PantryIngredientsManager from "./PantryIngredientsManager";

const PantryTempName = () => {
    const {pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList} = useContext(PantryContext);
    const [loading, setLoading] = useState(true);

    const fetchIngredientsList = async () => {
        try {
        let ingredientsList = [];
        await firestore()
            .collection('ingredients')
            .get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const abc =  {
                name,
                hindi_name,
                img_url,
                category,
                unit
                } = doc.data();
                ingredientsList.push(abc);
            });

            setIngredientList(ingredientsList);
            console.log("Ingredient list is ", ingredientList);
            if (loading) {
                setLoading(false);
              }
            });
            
        } catch (e) {
        console.log(e);
        }
    };

    const settingPantryTypeList = () => {
        const uniqueTypes = [];
        ingredientList.map((item) => {
            var findItem = uniqueTypes.find((x) => x === item.category);
            if (!findItem) uniqueTypes.push(item.category);
          });
        setPantryTypeList(uniqueTypes);
        console.log("set the types", pantryTypeList);
    }

    useEffect(() => {
        fetchIngredientsList();
        if(!loading) settingPantryTypeList()               
      }, []);

    return (
        <View style={{backgroundColor: '#fff', flex:1, justifyContent: 'flex-start'}}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Recommnded using Pantry Items</Text>
                </View>
                { loading? 
                    (<View>
                        <Text> Please wait ...</Text>
                    </View>)
                    : (
                            <View style={{padding : 15, backgroundColor : '#f3f7f0'}}>   
                            <FlatList 
                                scrollEnabled = {true}
                                horizontal= {true}
                                data={pantryTypeList}
                                keyExtractor={item=>item}
                                    renderItem={({item}) => {
                                    return( 
                                    <PantryCard item={item} />)
                            }}/>
                            <PantryIngredientsManager/>

                        </View>
                      )
                }
        </View>
    )
}

export default PantryTempName;
