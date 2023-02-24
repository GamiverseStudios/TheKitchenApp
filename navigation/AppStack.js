import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import RecipeScreen from '../screens/RecipeScreen';
import PlanningScreen from '../screens/PlanningScreen';
import ShoppingListScreen from '../screens/ShoppingList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="KitchenPal"
      component={RecipeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#f3f7f0',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 25,
        },
        headerStyle: {
          backgroundColor: '#f2545b',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="PlanningScreen"
      component={PlanningScreen}
      options={{
        title: 'KitchenPal',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="ShoppingListScreen"
      component={ShoppingListScreen}
      options={{
        title: 'KitchenPal',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#f3f7f0',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 25,
        },
        headerStyle: {
          backgroundColor: '#f2545b',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const PlanningStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
        name="PlanningScreen"
        component={PlanningScreen}
        options={{
            title: 'KitchenPal',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: '#f3f7f0',
                fontFamily: 'Kufam-SemiBoldItalic',
                fontSize: 25,
            },
            headerStyle: {
                backgroundColor: '#f2545b',
                shadowColor: '#fff',
                elevation: 0,
              },
            headerBackTitleVisible: false,
            headerBackImage: () => (
            <View style={{marginLeft: 15}}>
                <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
            ),
        }}
        />
        <Stack.Screen
          name="ShoppingListScreen"
          component={ShoppingListScreen}
          options={{
          title: 'KitchenPal',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#f3f7f0',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 25,
          },
          headerStyle: {
            backgroundColor: '#f2545b',
            shadowColor: '#fff',
            elevation: 0,
          },
          }}
        />
    </Stack.Navigator>
  );

const ShoppingListStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        options={{
        title: 'KitchenPal',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#f3f7f0',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 25,
        },
        headerStyle: {
          backgroundColor: '#f2545b',
          shadowColor: '#fff',
          elevation: 0,
        },
        }}
        />
    </Stack.Navigator>
  );

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f2545b',
        style: {
            position: 'absolute',
            elevation :5,
            borderRadius : 15,
            backgroundColor : '#ffffff',
            height : 50,
        }
      }}>
      <Tab.Screen
        name="Home"
        component={RecipeStack}
        options={({route}) => ({
          tabBarLabel: 'Recipe',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />

    <Tab.Screen
        name="Planning"
        component={PlanningStack}
        options={({route}) => ({
          tabBarLabel: 'Pantry',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="fast-food-outline"
              color={color}
              size={size}
            />
          ),
        })}
    />    
    <Tab.Screen
        name="ShoppingList"
        component={ShoppingListStack}
        options={({route}) => ({
          tabBarLabel: 'ShoppingList',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="list"
              color={color}
              size={size}
            />
          ),
        })}
    />    
    <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;