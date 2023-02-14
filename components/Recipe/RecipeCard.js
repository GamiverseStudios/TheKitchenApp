import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Alert, {FlatList,View, Text} from 'react-native';
import FormButton from '../FormButton';

import {
  Container,
  Card,
  UserInfo,
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
  IngredientTitle,
  IngredientItems,
  PlanningAreaWrapper,
  PlanningButton
} from '../../styles/FeedStyles';

import ProgressiveImage from '../ProgressiveImage';

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
    const ingredients = [];
    item.Ingredients.map((ingredient) => {ingredients.push({"name" : ingredient})});
    //console.log(ingredients);
  //const listItems = item.Ingredients.map((ingredients) => <li><Text>{ingredients}</Text></li>);
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
          <CookTime>Cooking Time  : {item.cook_time}</CookTime>
          <CookTime>Preparation Time : {item.prep_time}</CookTime>
        </RecipeInfoText>
      </RecipeInfo>
      <Divider />
      <RecipeInfoText>
        <IngredientTitle>
            Ingredients : 
        </IngredientTitle>
        <FlatList
            data={ingredients}  
            renderItem={(item) => {
                //console.log("The ingredient is : ", item.item.name);
                return (
                <RecipeInfoText>
                    <IngredientItems>{`\u2022 ${item.item.name}`}</IngredientItems>
                </RecipeInfoText>
                );
            }}
        />
      </RecipeInfoText>
      <Divider />
            {/* TODO : Add fucntions to show options to add to breakfast or lunch or snacks or dinner on clicking this card*/}
    </Card>
  );
};

export default RecipeCard;

const PlanForBreakFast = () => {
    console.log('Planned for Breakfast');
}
const PlanForLunch = () => {
    console.log('Planned for Breakfast');
}
const PlanForDinner = () => {
    console.log('Planned for Breakfast');
}
const PlanForSnacks = () => {
    console.log('Planned for Breakfast');
}