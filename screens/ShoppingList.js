import {
    View,
    Text,
    Button
  } from 'react-native';


  const ShoppingListScreen = ({route, navigation}) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>You are at ShoppingList Screen!</Text>
            <Button 
            onPress={() => navigation.goBack()}
            title="Go back"
            />
          </View>
        );
  };

  export default ShoppingListScreen;