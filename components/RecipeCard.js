import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Alert from 'react-native';
import FormButton from './FormButton';

import {
  Container,
  Card,
  UserInfo,
  FlatList,
  Text,
  RecipeInfo,
  RecipeImg,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
  RecipeInfoText,
  RecipeName,
  CookTime,
  RecipeDetails,
} from '../styles/FeedStyles';

import ProgressiveImage from './ProgressiveImage';

import {AuthContext} from '../navigation/AuthProvider';

import moment from 'moment';
import {NativeViewGestureHandler, TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';


const RecipeCard = ({item, onDelete, onPress}) => {

    // {
        
    //     recipe {
    //         name : String,
    //         category : 'Veg' | 'NonVeg',
    //         img_url : String,
    //         cooking_time : String
    //         ingredients : [ {
    //             name : String,
    //             hindiName : String,
    //         }]
    //     }


        
    // }

  // const listItems = item.Ingredients.map((ingredients) => <li><Text>{ingredients}</Text></li>);
  return (
    <Card key={item.name}>
      <RecipeInfo>
        <RecipeImg
          source={{
            uri: item.img_url
              ? item.img_url : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
          }}
        />
        <RecipeInfoText>
          <TouchableOpacity onPress={onPress}>
            <RecipeName>
                {item.name} ({item.hindi_name})
            </RecipeName>
          </TouchableOpacity>
          <CookTime>Cooking Time  : {item.cooking_time}</CookTime>
          <CookTime>Preparation Time : {item.prep_time}</CookTime>
        </RecipeInfoText>
      </RecipeInfo>
      <Divider />
      <RecipeDetails>
        {
        
        /* <FlatList
            data={item.Ingredients.map((ingredients) => {ingredients : ingredients})}
            renderItem={(ingredients) => {
                console.log(ingredients);
                return (
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 20 }}>{ingredients}</Text>
                </View>
                );
            }}
            /> */}
      </RecipeDetails>
      <Divider />
      <InteractionWrapper>
        <Interaction onPress={() => PlanForBreakFast}>
          <Button> Plan for BreakFast</Button>
        </Interaction>
        <Interaction onPress={() => PlanForLunch}>
          <Button> Plan for Lunch</Button>
        </Interaction>
        <Interaction onPress={() => PlanForDinner}>
          <Button> Plan for Dinner</Button>
        </Interaction>
        <Interaction onPress={() => PlanForSnacks}>
          <Button> Plan for Snacks</Button>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default RecipeCard;

const PlanForBreakFast = () => {
    Alert.alert('Plan for BreakFast');
}
const PlanForLunch = () => {
    Alert.alert('Plan for Lunch');
}
const PlanForDinner = () => {
    Alert.alert('Plan for Dinner');
}
const PlanForSnacks = () => {
    Alert.Alert('Plan for Snacks');
}