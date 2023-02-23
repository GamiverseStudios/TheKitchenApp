import {
    View,
    Text,
    Button
  } from 'react-native';


  const ShoppingListScreen = ({route, navigation}) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize : 20, fontFamily: "bold", padding : 50}}>Coming Soon</Text>
              <Button 
              onPress={() => navigation.goBack()}
              title="Go back"
              />
          </View>
        );
  };

  export default ShoppingListScreen;