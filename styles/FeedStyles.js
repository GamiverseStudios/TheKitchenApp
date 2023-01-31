import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

export const Card = styled.View`
    align-self: center;
    background-color: #fff;
    elevation: 10;
    width: 90%;
    margin-bottom: 20px;
    border-radius: 10px;
    shadowColor: #52006A,  
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const RecipeInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
    padding-bottom: 0px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const RecipeImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;


export const RecipeInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Lato-Regular';
`;

export const RecipeName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Lato-Regular';
`;

export const PostTime = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    color: #666;
`;

export const CookTime = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    color: #666;
`;

export const IngredientTitle = styled.Text`
font-size: 16px;
font-weight: bold;
font-family: 'Lato-Regular';
padding-bottom: 4px;
`;

export const IngredientItems = styled.Text`
font-size: 14px;
font-family: 'Lato-Regular';
color: #666;
`;

export const PostText = styled.Text`
    font-size: 14px;
    font-family: 'Lato-Regular';
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;

export const RecipeDetails = styled.Text`
    font-size: 14px;
    font-family: 'Lato-Regular';
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    /* margin-top: 15px; */
`;


export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const InteractionWrapper = styled.View`
    justify-content: space-around;
    padding: 15px;
`;

export const PlanningAreaWrapper = styled.View`
    justify-content: space-around;
`;

export const PlanningButton = styled.TouchableOpacity`
    background-color: #ccc;
    border-radius: 5px;
    margin: 2px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;