import { useContext, useEffect, useState } from "react";

import { SafeAreaView, Text, View } from "react-native";
import PantryCard, { clickedValue } from "./PantryCard";
import { ScrollView } from "react-native";
import { PantryProvider, PantryContext} from "../../navigation/PantrySharedData.android.";
import { FlatList } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import PantryIngredientsManager from "./PantryIngredientsManager";
import { ingredient_details, unique_category_type } from "../../utils/IngredientDetailsFile";

const PantryTempName = () => {
    const {pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList} = useContext(PantryContext);
    const [loading, setLoading] = useState(true);

    const fetchIngredientsList = async () => {

        ingredient_details.forEach((item) => {
            item.img_url = "";
            item.isSelected = false;
            ingredientList.push(item);
        });

        console.log("Captured Ingredient List : ", ingredientList[0]);
        settingPantryTypeList();
        if(loading) {
            setLoading(false);
        }
        // try {
        // let ingredientsList = [];
        // await firestore()
        //     .collection('ingredients_list')
        //     .get()
        //     .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         const abc =  {
        //         name,
        //         hindi_name,
        //         category,
        //         } = doc.data();
        //         abc['isSelected'] = false;
        //         abc['img_url'] = '';
        //         ingredientList.push(abc);
        //     });
        //     settingPantryTypeList();

        //     console.log("Ingredient list is ", ingredientList);
        //     if (loading) {
        //         setLoading(false);
        //       }
        //     });
            
        // } catch (e) {
        // console.log(e);
        // }
    };

    const settingPantryTypeList = () => {
        // ingredientList.map((item) => {
        //     var findItem = uniqueTypes.find((x) => x === item.category);
        //     if (!findItem) uniqueTypes.push(item.category);
        //   });
        setPantryTypeList(unique_category_type);
        console.log("set the types", pantryTypeList);
    }

    useEffect(() => {
        fetchIngredientsList();
      }, []);

    return (
        <View style={{backgroundColor: '#fff', flex:1, justifyContent: 'flex-start'}}>
                <View>
                    <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', padding: 10, paddingBottom: 0, color: 'black'}}>Pantry Manager</Text>
                    <Text style={{fontSize: 15, alignSelf: 'center', color: 'grey'}}>Select Available Ingredients</Text>
                </View>
            
                { loading? 
                    (<View>
                        <Text style={{color: 'black'}}> Please wait ...</Text>
                    </View>)
                    : (<View style={{backgroundColor: '#fff', flex:1, justifyContent: 'flex-start'}}>
                            <SafeAreaView style={{padding : 15, backgroundColor : '#f3f7f0'}}>   
                            <FlatList 
                                scrollEnabled = {true}
                                horizontal= {true}
                                data={pantryTypeList}
                                keyExtractor={item=>item}
                                    renderItem={({item}) => {
                                    return( 
                                    <PantryCard item={item} />)
                            }}/>
                            </SafeAreaView>
                            <PantryIngredientsManager/>
                            </View>
                      )
                }
                
                {/* <View><Text>Hello </Text></View> */}
                
        </View>
    )
}

export default PantryTempName;