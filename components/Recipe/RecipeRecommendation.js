import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import RecipeCard from './RecipeCard';
import { ScrollView } from "react-native";
import { PantryContext } from "../../navigation/PantrySharedData.android.";
import { useContext, useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native-gesture-handler";
import { PlanningButton } from "../../styles/FeedStyles";
import { recipe_details_list } from "../../utils/RecipeDetailsFile";

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

            if(checkIfIngredientsAvailable(recipe.Ingredients) && !recommendedRecipes.includes(recipe)) {
                suggestions.push(recipe);
            }
        });

        //TODO : This is getting filled a s empty list after the first load and leading to the toggle behaviour
        setRecommendedRecipes(suggestions);
    }

    useEffect(() => {
        fetchRecipeDetails();
      }, []);


    const checkIfIngredientsAvailable = (reqIngredients) => {
        let areAllIngredientsAvailable = true;
        reqIngredients.map((item) => {
            var findItem = selectedIngredients.find((x) => x === item);
            if (!findItem) {
                areAllIngredientsAvailable = false;
            }
          });
          return true;
    }

    const fetchRecipeDetails = async () => {
        recipe_details_list.forEach((item) => {
            item.Ingredients = item.final_ingredients_1.split(',');
            recipeDetails.push(item);
        })
        console.log("Captured recipe details, ", recipeDetails[0]);
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
            
            <SafeAreaView style={{backgroundColor: '#fff', zIndex: 0}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', alignItems: 'center'}}>Recommnded Recipes using Pantry Items</Text>
                <PlanningButton onPress={loadFromPantry}>
                    <Text>Suggest Dishes using Pantry Ingredients</Text>
                </PlanningButton>
                <View>
                    {
                        recommendedRecipes.length === 0 ? 
                            (<View>
                                <Text>Please add more ingredients for better suggestions</Text>
                            </View>) : 
                        (<FlatList 
                        scrollEnabled = {true}
                        data={recommendedRecipes}
                        renderItem={({item}) => {
                            return( <RecipeCard item={item} />)
                    }}/>)

                    }
                </View>             
            </SafeAreaView>
    );
};