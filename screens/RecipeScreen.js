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
    const fetchRecipeDetails = async () => {
        try {
        let recipeList = [];
        await firestore()
            .collection('recipe')
            .orderBy('cook_time', 'asc')
            .get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const abc =  {
                name,
                hindi_name,
                img_url,
                cuisine,
                cook_time,
                prep_time,
                ingredients,
                course
                } = doc.data();
                recipeList.push(abc);
            });

            console.log('Total Posts: ', recipeList[0].ingredients);
            setRecipeDetails(recipeList);
            if (loading) {
                setLoading(false);
              }
            });
            
        } catch (e) {
        console.log(e);
        }
    };

  useEffect(() => {
    if(recipeDetails == null){
        setRecipeDetails(recipe_details_list);
        fetchRecipeDetails();
    } else {
        setLoading(false);
    }
  }, []);




  return (
    <View style={{alignItems:'center', backgroundColor: '#fff',padding: 20,}}>
        <Text style={{marginTop: 10, fontSize: 30, fontWeight: 'bold', color: 'red'}}> What should I cook Today? </Text>
        <View>
            <RecipeRecommendationFromPantry recipeDetails={recipeDetails} loading = {loading} />
         </View>
    </View>
  );
};

export default RecipeScreen;