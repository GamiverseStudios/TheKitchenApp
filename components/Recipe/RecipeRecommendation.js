import { SafeAreaView, Text, View } from "react-native";
import RecipeCard from './RecipeCard';
import { ScrollView } from "react-native";

export const RecipeRecommendationFromPantry = ({recipeDetails, loading}) => {
    return (

            <SafeAreaView style={{backgroundColor: '#fff', zIndex: 0}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', alignItems: 'center'}}>Recommnded Recipes using Pantry Items</Text>
                <ScrollView>
                {
                    loading?(<View></View>) : (<RecipeCard item={recipeDetails[0]} />)
                }
                {
                    loading?(<View></View>) : (<RecipeCard item={recipeDetails[0]} />)
                }
                </ScrollView>
            </SafeAreaView>
    );
};