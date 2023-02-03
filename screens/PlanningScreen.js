import React, {useEffect, useState, Fragment} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  SkeletonPlaceholder
} from 'react-native';
import PantryCard from '../components/Pantry/PantryCard';
import { PantryCardsScrollView } from '../components/Pantry/PantryCardsScrollView';


  const PlanningScreen = ({navigation, route}) => {
        return (
                <PantryCardsScrollView loading = {false} />
        );
  };

  export default PlanningScreen;