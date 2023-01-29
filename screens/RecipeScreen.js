import React, {useEffect, useState, Fragment} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import PostCard from '../components/PostCard';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {Container} from '../styles/FeedStyles';
import FormInput from '../components/FormInput';
import SearchButton from '../components/SearchButton';

const RecipeScreen = ({navigation}) => {
  
  return (
    <View style={{flex:1}}>
          <View style={{alignItems:'center', backgroundColor: '#fff',padding: 20, flex:1, zIndex:1}}>
            <Text style={{marginTop: 10, fontSize: 30, fontWeight: 'bold', paddingBottom: 30}}> What should I cook Today? </Text>

            <SearchButton/>
          </View>
          <View style={{flex:1, backgroundColor: '#fff', zIndex: 0}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', alignItems: 'center', flex:1}}> Recommnded Recipes </Text>
          </View>
    </View>
  );
};

export default RecipeScreen;