import { SafeAreaView, Text, View } from "react-native";
import PantryCard, { clickedValue } from "./PantryCard";
import { ScrollView } from "react-native";
import { PantryProvider, PantryContext} from "../../navigation/PantrySharedData.android.";
import { useContext } from "react";
import PantryTempName from "./PantryTempName";

export const PantryCardsScrollView = ({loading}) => {
    return (
            <PantryProvider>
                <PantryTempName/>
            </PantryProvider>
    );
};