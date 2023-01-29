import React, {useEffect, useState, Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { RadioButton } from 'react-native-paper';


import SearchButton from '../components/SearchButton';

const RecipeScreen = ({navigation}) => {
  const [recommendFrom, setRecommendFrom] = useState('Pantry');
  return (
    <View style={{flex:1, alignItems:'center', backgroundColor: '#fff',padding: 20,}}>
          <Text style={{marginTop: 10, fontSize: 30, fontWeight: 'bold'}}> What should I cook Today? </Text>
          <View style={{alignItems:'center', backgroundColor: '#fff', flexDirection:'row', zIndex:1}}>
            <RadioButton
                value="first"
                status={ recommendFrom === 'Pantry' ? 'checked' : 'unchecked' }
                onPress={() => setRecommendFrom('Pantry')}
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
                <View style={{flex:1, backgroundColor: '#fff', zIndex: 0}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center', flex:1}}>Recommnded Recipes based on your Pantry</Text>
                </View>
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