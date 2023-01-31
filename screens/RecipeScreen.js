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
import RecipeCard from '../components/RecipeCard';
import { RecipeRecommendationFromPantry } from '../components/RecipeRecommendation';
import { Divider } from '../styles/FeedStyles';
const RecipeScreen = ({navigation}) => {
    const [recipeDetails, setRecipeDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchRecipeDetails = async () => {
        try {
        let recipeList = [];
        await firestore()
            .collection('recipe')
            .orderBy('cooking_time', 'asc')
            .get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const abc =  {
                name,
                hindi_name,
                img_url,
                category,
                cooking_time,
                prep_time,
                Ingredients,
                meal_type
                } = doc.data();
                recipeList.push(abc);
            });

            console.log('Total Posts: ', recipeList[0].Ingredients);
            setRecipeDetails(recipeList);
            if (loading) {
                setLoading(false);
              }
            });
            
        } catch (e) {
        console.log(e);
        }
    };
      
  const [recommendFrom, setRecommendFrom] = useState('Pantry');

  useEffect(() => {
    fetchRecipeDetails();
  }, []);




  return (
    <View style={{flex:1, alignItems:'center', backgroundColor: '#fff',padding: 20,}}>
        <Text style={{marginTop: 10, fontSize: 30, fontWeight: 'bold'}}> What should I cook Today? </Text>
        <View>
            <RecipeRecommendationFromPantry recipeDetails={recipeDetails} loading = {loading} />
         </View>
    </View>
  );
};

export default RecipeScreen;