import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Alert, {FlatList,View, Text} from 'react-native';
import FormButton from '../FormButton';

import {
  Container,
  PantryCategoryCard,
  UserInfo,
  PantryCardCategoryInfo,
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
import { sharedData } from '../../navigation/PantrySharedData.android.';
import { PantryContext } from '../../navigation/PantrySharedData.android.';

const PantryCard = ({item}) => {
    const { pantryType, setPantryType } = useContext(PantryContext);
    const handlePress = () => {
        setPantryType(item);
      };
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
  //const listItems = item.Ingredients.map((ingredients) => <li><Text>{ingredients}</Text></li>);
  return (
    <PantryCategoryCard key={item} onPress={() => handlePress()}>
      <PantryCardCategoryInfo>
        {/* <RecipeImg
          source={{
            uri: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
          }}
        /> */}
        <RecipeInfoText>
            <RecipeName>
                {item}
            </RecipeName>
        </RecipeInfoText>
      </PantryCardCategoryInfo>
            {/* TODO : Add fucntions to show options to add to breakfast or lunch or snacks or dinner on clicking this card*/}
    </PantryCategoryCard>
  );
};


export default PantryCard;