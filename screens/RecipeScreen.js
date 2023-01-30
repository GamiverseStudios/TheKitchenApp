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
          <View style={{alignItems:'center', backgroundColor: '#fff', flexDirection:'row', zIndex:1}}>
            <RadioButton
                value="first"
                status={ recommendFrom === 'Pantry' ? 'checked' : 'unchecked' }
                onPress={() => {
                    console.log("the details are : " + recipeDetails);
                    setRecommendFrom('Pantry')
                }}
            /> 
            <Text>Recommend Dishes from Pantry Ingredients</Text>
            
        </View>
        <View style={{alignItems:'center', backgroundColor: '#fff', flexDirection:'row', zIndex:1}}>
            <RadioButton
                value="second"
                status={ recommendFrom === 'Select Manully' ? 'checked' : 'unchecked' }
                onPress={() => setRecommendFrom('Select Manully')}
            />
            <Text>Manually Select available ingredients             </Text>
        </View>
    <View>
        {recommendFrom === 'Pantry' ? 
            (   
                <SafeAreaView style={{flex:1, backgroundColor: '#fff', zIndex: 0}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center', flex:1}}>Recommnded Recipes based on your Pantry</Text>
                {
                    loading?(<View></View>) : (<RecipeCard item={recipeDetails[0]} />)
                }
                </SafeAreaView>
            ) : (
            <View>
                <SearchButton/>
                <View style={{flex:1, backgroundColor: '#fff', zIndex: 0}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center', flex:1}}>Recommnded Recipes</Text>
                </View> 
            </View>)}

    </View>

</View>
  );
};

export default RecipeScreen;