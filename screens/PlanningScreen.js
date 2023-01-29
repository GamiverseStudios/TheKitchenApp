import {
    View,
    Text,
    Button
  } from 'react-native';


  const PlanningScreen = ({navigation, route}) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>You are at Planning Screen!</Text>
            <Button 
            onPress={() => navigation.navigate("ShoppingListScreen")}
            title="Go to ShoppingList Screen"
            />
            <Button 
            onPress={() => navigation.goBack()}
            title="Go back"
            />
          </View>
        );
  };

  export default PlanningScreen;