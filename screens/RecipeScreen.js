import React, {useEffect, useState, Fragment} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  SkeletonPlaceholder
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import SearchButton from '../components/SearchButton';
import RecipeCard from '../components/Recipe/RecipeCard';
import { RecipeRecommendationFromPantry } from '../components/Recipe/RecipeRecommendation';
import { Divider } from '../styles/FeedStyles';
import { recipe_details_list } from '../utils/RecipeDetailsFile';
const RecipeScreen = ({navigation}) => {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(recipeDetails == null){
        setRecipeDetails(recipe_details_list);
    } else {
        setLoading(false);
    }
  }, []);




  return (
    <View style={{alignItems:'center', backgroundColor: '#fff',padding: 10,}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'red', paddingBottom : 10}}>What should I cook Today?</Text>
        <View>
            <RecipeRecommendationFromPantry recipeDetails={recipeDetails} loading = {loading} />
         </View>
    </View>
  );
};

export default RecipeScreen;