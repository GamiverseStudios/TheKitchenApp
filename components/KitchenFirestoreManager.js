import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { ingredients } from '../utils/RecipeDetailsFile';
import { ingredient_details } from '../utils/IngredientDetailsFile';
import FormButton from './FormButton';


export const kitchestoreScreen = () => {
    console.log(ingredient_details);
    return (
        <View>
        <Button onPress={() => ingredient_details.forEach((ingredient) => submitIngredients(ingredient))}> Submit</Button>
        <FormButton
                buttonTitle="Upload1"
                onPress={() => {
                  ingredient_details.forEach((ingredient) => submitIngredients(ingredient))
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

const submitIngredients = async (ingredient) => {
  firestore()
  .collection('ingredients_list')
  .doc(ingredient.ingredients)
  .set({
    name: ingredient.ingredients,
    hindi_name: ingredient.hindi_name,
    category: "Others"
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

const submitPost = async (ingredient) => {
    firestore()
    .collection('recipe')
    .doc(ingredient.TranslatedRecipeName)
    .set({
      name: ingredient.TranslatedRecipeName,
      hindi_name: ingredient.hindi_name,
      cuisine: ingredient.Cuisine_x,
      img_url: ingredient.ImageURL,
      recipe_url: ingredient.URL_x,
      prep_time: ingredient.PrepTimeInMins,
      cook_time: ingredient.CookTimeInMins,
      course : ingredient.Course,
      diet : ingredient.Diet,
      ingredients : getIngredients(ingredient)

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

  const getIngredients = (ingredient) => {
      let abc = ingredient.final_ingredients_1.split(',');
      console.log('the converted array is ', abc);
      return abc;
  }