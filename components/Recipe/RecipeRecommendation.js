import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import RecipeCard from './RecipeCard';
import { ScrollView } from "react-native";
import { PantryContext } from "../../navigation/PantrySharedData.android.";
import { useContext, useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native-gesture-handler";
import { PlanningButton } from "../../styles/FeedStyles";
import { recipe_details_list } from "../../utils/RecipeDetailsFile";
import { unique_category_type } from "../../utils/IngredientDetailsFile";

export const RecipeRecommendationFromPantry = () => {
    const {pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList} = useContext(PantryContext);
    const [recipeDetails, setRecipeDetails] = useState([]);
    const selectedIngredients = [];
    const [recommendedRecipes, setRecommendedRecipes] = useState([]);
    const loadFromPantry = () => {
        let suggestions = [];

        ingredientList.map((item) => {
            if(item.isSelected && !selectedIngredients.includes(item.name)) {
                selectedIngredients.push(item.name);
            }
        });
        recipeDetails.map((recipe) => {
            // console.log("current Recipe : ", recipe);
            if(checkIfIngredientsAvailable(recipe.Ingredients) && !recommendedRecipes.includes(recipe)) {
                suggestions.push(recipe);
            }
        });

        //TODO : This is getting filled a s empty list after the first load and leading to the toggle behaviour
        setRecommendedRecipes(suggestions);
    }

    const shuffleArray = () => {
        let abc = recipeDetails.sort(() => Math.random() - 0.5);
        setRecommendedRecipes(abc);
      }

    useEffect(() => {
        fetchRecipeDetails();
      }, []);


    const checkIfIngredientsAvailable = (reqIngredients) => {
        let areAllIngredientsAvailable = true;
        // console.log("req ingredients : ", reqIngredients);
        // console.log("selected ingredients : ", ingredientList);
        // console.log("Selected ingredients are : ", selectedIngredients);
        reqIngredients.forEach((item) => {
            var it = ingredientList.find((x) => {
                return x.name === item});
            // console.log("it is  : ", it);
            // console.log(item);
            // it ? console.log(unique_category_type.indexOf(it.category)) : console.log(it);
            if(it && unique_category_type.indexOf(it.category) != -1) {
                var findItem = selectedIngredients.find((x) => x === item);
                // console.log("find Item is  : ", findItem);
                if(!findItem) {
                    areAllIngredientsAvailable = false;
                }
            }
          });
          return areAllIngredientsAvailable;
    }

    const fetchRecipeDetails = async () => {
        recipe_details_list.forEach((item) => {
            item.Ingredients = item.final_ingredients_1.split(',');
            recipeDetails.push(item);
        })
        // try {
        // let recipeList = [];
        // await firestore()
        //     .collection('recipe')
        //     .orderBy('cooking_time', 'asc')
        //     .get()
        //     .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         const abc =  {
        //         name,
        //         hindi_name,
        //         img_url,
        //         category,
        //         cooking_time,
        //         prep_time,
        //         Ingredients,
        //         meal_type
        //         } = doc.data();
        //         recipeList.push(abc);
        //     });
        //     setRecipeDetails(recipeList);
        //     });
            
        // } catch (e) {
        // console.log(e);
        // }
    };


    return (
            <View>
            <SafeAreaView style={{backgroundColor: '#fff', zIndex: 0, flexDirection : "row", elevation : 5,}}>
            
                <TouchableOpacity style={{flex : 1, borderRadius: 3, backgroundColor :  '#f2545b', justifyContent: 'center', marginRight : 10}} 
                                onPress={() => loadFromPantry()}>
                    <Text style={{color:'#f3f7f0', fontSize: 16, alignSelf : "center"}}>Recommend using Pantry</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flex : 1, backgroundColor :  '#f3f7f0', justifyContent: 'center'}}  
                                onPress={() => shuffleArray()}>
                    <Text style={{color:'#f2545b', fontSize: 16, alignSelf : "center"}}>Random Recommendation</Text>
                </TouchableOpacity>
                </SafeAreaView>
                <View style={{marginTop : 20, marginBottom : 350, borderColor : 'grey', elevation : 1}}>
                    <Text style = {{marginBottom : 10, color : 'black'}}> Filter and Sorting buttons will be added here </Text>
                    {
                        recommendedRecipes.length === 0 ? 
                            (<View>
                                <Text style={{color: 'black', fontSize : 13}}>Please add more ingredients for better suggestions</Text>
                            </View>) : 
                        (<FlatList 
                        scrollEnabled = {true}
                        data={recommendedRecipes}
                        renderItem={({item}) => {
                            return( <RecipeCard item={item} />)
                    }}/>)

                    }
                </View>   
                </View>          
            
    );
};