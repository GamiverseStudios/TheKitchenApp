import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { ingredients } from '../utils/Vegetable';
import FormButton from './FormButton';


export const kitchestoreScreen = () => {
    console.log(ingredients);
    return (
        <View>
        <Button onPress={() => ingredients.forEach((ingredient) => submitPost(ingredient))}> Submit</Button>
        <FormButton
                buttonTitle="Upload1"
                onPress={() => {
                   
                    ingredients.forEach((ingredient) => submitPost(ingredient))
                }
                }
            />
        </View>

    )
}




const deleteIngredients = (postId) => {
 firestore()
    .collection('ingredients')
    .doc(postId)
    .delete()
    .then(() => {
    Alert.alert(
        'Post deleted!',
        'Your post has been deleted successfully!',
    );
    setDeleted(true);
    })
    .catch((e) => console.log('Error deleting posst.', e));
};

const submitPost = async (ingredient) => {
    firestore()
    .collection('ingredients')
    .doc(ingredient.name)
    .set({
      category: ingredient.category,
      name: ingredient.name,
      hindi_name: ingredient.hindi_name,
      img_url: ingredient.img_url,
      unit: ingredient.unit
    })
    .then(() => {
      console.log('Post Added!');
      Alert.alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }