import { SafeAreaView, Text, View } from "react-native";
import RecipeCard from './RecipeCard';
import { ScrollView } from "react-native";

export const RecipeRecommendationFromPantry = ({recipeDetails, loading}) => {
    return (
        <ScrollView>
            <SafeAreaView style={{flex:1, backgroundColor: '#fff', zIndex: 0}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', alignItems: 'center', padding: 10}}>Recommnded Recipes using Pantry Items</Text>
            {

                loading?(<View></View>) : (<RecipeCard item={recipeDetails[0]} />)
            }
            </SafeAreaView>
            <View style={{flex:1, backgroundColor: '#fff', zIndex: 0}}>
            {

                loading?(<View></View>) : (<RecipeCard item={recipeDetails[0]} />)
            }
            </View>
        </ScrollView>

    );
};