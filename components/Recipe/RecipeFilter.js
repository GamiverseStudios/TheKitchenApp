import { useContext, useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { PantryContext } from "../../navigation/PantrySharedData.android.";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight } from "../../utils/Dimentions";
import { recipe_details_list } from "../../utils/RecipeDetailsFile";

export const RecipeFilter = () => {

const {recipeFilters, setRecipeFilters, sortRecipe, setSortRecipe, filteredRecipeList, setFilteredRecipeList} = useContext(PantryContext);
const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);
const [dietOptions, setDietOptions] = useState([]);
const [courseOptions, setCourseOptions] = useState([]);
const [cuisineOptions, setCuisineOptions] = useState([]);
const [refreshState, setRefreshState] = useState(false);
    // All your menu options go here. 
const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Diet', },
    { id: '2', name: 'Course', },
    { id: '3', name: 'Cuisine', }
  ])

const onSelect = (menuItemList,ind) => {
    menuItemList.map((item) => {
        if(item.name == ind.name) {
            item.isSelected = !item.isSelected;
        }
    });
    setRefreshState(!refreshState);
}  

const getFilterOptions = () => {
    const uniqueDietTypes = [];
    const uniqueCuisineTypes = [];
    const uniqueCourseTypes= [];
    recipe_details_list.map((item) => {
    var findItem = uniqueDietTypes.find((x) => x.name === item.diet);
    if (!findItem) {
        const abc = {"name" : item.diet, "isSelected" : false};
        uniqueDietTypes.push(abc);
    }

    var it = uniqueCuisineTypes.find((x) => x.name === item.cuisine);
    if (!it) {
        const abc = {"name" : item.cuisine, "isSelected" : false}
        uniqueCuisineTypes.push(abc);
    }

    var y = uniqueCourseTypes.find((x) => x.name === item.course);
    if (!y) {
        const abc = {"name" : item.course, "isSelected" : false};
        uniqueCourseTypes.push(abc);
    }
    });

    setDietOptions(uniqueDietTypes);
    setCuisineOptions(uniqueCuisineTypes);
    setCourseOptions(uniqueCourseTypes);
}


const applyFilters = () => {
    recipeFilters.diet = dietOptions;
    recipeFilters.course = courseOptions;
    recipeFilters.cuisine = cuisineOptions;

    let selectedDietOptions = [];
    dietOptions.map((item) => {
        if(item.isSelected === true) {
            selectedDietOptions.push(item.name);
        }
    });

    if(selectedDietOptions.length === 0) {
        dietOptions.map((item) => {
            selectedDietOptions.push(item.name);
        })
    }

    let selectedCuisineOptions = [];
    cuisineOptions.map((item) => {
        if(item.isSelected === true) {
            selectedCuisineOptions.push(item.name);
        }
    });

    if(selectedCuisineOptions.length === 0) {
        cuisineOptions.map((item) => {
            selectedCuisineOptions.push(item.name);
        })
    }

    let selectedCourseOptions = [];
     courseOptions.map((item) => {
        if(item.isSelected === true) {
            selectedCourseOptions.push(item.name);
        }
    });

    if(selectedCourseOptions.length === 0) {
        courseOptions.map((item) => {
            selectedCourseOptions.push(item.name);
        })
    }

    filteredRecipeList.map((item) => {

        if(selectedDietOptions.find((x) => x === item.diet) && selectedCuisineOptions.find((x)=> x === item.cuisine) && selectedCourseOptions.find((x) => x === item.course)) {
            item.shouldShow = true;
        } else {
            
            item.shouldShow = false;
        }
    });

    setFilteredRecipeList(filteredRecipeList);
    setIsFilterButtonClicked(!isFilterButtonClicked);

    // Filtering logic expected here
}

useEffect(() => {
    getFilterOptions();
  }, []);

// this holds the keys of the menuItems for the view to know which category is currently being rendered. 
const [selectedItem, setSelectedItem] = useState('1');

return (
    isFilterButtonClicked ? 
    (<View style={styles.filterWindow}>
         <TouchableOpacity style={{flexborderRadius: 3, backgroundColor :  '#f2545b', justifyContent: "flex-start", flexDirection:"row"}} onPress={() => setIsFilterButtonClicked(!isFilterButtonClicked)}>

        <Text style={{fontSize : 20}}>Filter</Text>
    </TouchableOpacity> 
    <View style ={styles.content}>
        <View style={styles.menuColumn}>
        {menuItems.map(
            (item, index) => {
              return (
                <TouchableOpacity key={item.id} onPress={() => {setSelectedItem(item.id)}} style={[styles.menuItem, item.id === selectedItem ? styles.selectedMenuItem : null]}>
                  <Text style={styles.menuItemText}>{item.name}</Text>
                </TouchableOpacity>
              )
            }
          )
        }
        </View>
        <View style={styles.settingsColumn}>
          {
            selectedItem === '1' &&
            <View style={styles.settingsView} >
            <FlatList
                data={dietOptions}
                renderItem={({item}) => {  
                return( 
                <View style={{flex: 1, flexDirection: "row", alignContent: 'center', padding : 3}}>
                    <TouchableOpacity 
                        style = {{borderColor: 'black', borderWidth: 1, padding : 5, borderRadius : 10, backgroundColor : item.isSelected ? '#FDD4D7' : 'white'}}
                        onPress = {() => onSelect(dietOptions, item)}> 
                        <View>
                            <Text style={{color : 'black'}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
            }} />
            </View>
          }
          {      
            selectedItem === '2' &&
            <View style={styles.settingsView} >
            <FlatList
                data={courseOptions}
                renderItem={({item}) => {    
                return( 
                <View style={{flex: 1, flexDirection: "row", alignContent: 'center', padding : 3}}>
                    <TouchableOpacity 
                        style = {{borderColor: 'black', borderWidth: 1, padding : 5, borderRadius : 10, backgroundColor : item.isSelected ? '#FDD4D7' : 'white'}}
                        onPress = {() => onSelect(courseOptions, item)}> 
                        <View>
                            <Text style={{color : 'black'}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
            }} />
            </View>
          }     
          {      
            selectedItem === '3' &&
            <View style={styles.settingsView} >
            <FlatList
                data={cuisineOptions}
                renderItem={({item}) => {
                return( 
                <View style={{flex: 1, flexDirection: "row", alignContent: 'center', padding : 3}}>
                    <TouchableOpacity 
                        style = {{borderColor: 'black', borderWidth: 1, padding : 5, borderRadius : 10, backgroundColor : item.isSelected ? '#FDD4D7' : 'white'}}
                        onPress = {() => onSelect(cuisineOptions, item)}> 
                        <View>
                            <Text style={{color : 'black'}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
            }} />
            </View>
          }
        </View>
    </View>
    <View style ={{flex : 1 }}>
                <TouchableOpacity 
                        style = {{borderColor: 'black', borderWidth: 1, padding : 5, borderRadius : 10, backgroundColor : 'white'}}
                        onPress = {() => applyFilters()}> 
                        <View>
                            <Text style={{color : 'black'}}>Apply</Text>
                        </View>
            </TouchableOpacity> 
    </View>
    </View>)
    : (<View style = {{flex : 0.05}}>
    <TouchableOpacity style={{flexborderRadius: 3, backgroundColor :  '#f2545b', justifyContent: 'center'}} onPress={() => setIsFilterButtonClicked(!isFilterButtonClicked)}>
        <Text style={{fontSize : 20}}>Filter</Text>
    </TouchableOpacity> 
    </View>)
);
}
    
export default RecipeFilter;


const styles = StyleSheet.create ({

    content: {
        flex : 6,
        flexDirection: 'row',
      },
    
      // menu Column - left
      menuColumn: {
        flex: .4,
        flexDirection: 'column',
        borderRightColor: '#F8F8FF',
        borderRightWidth: 1,
      },
      menuItem: {
        // flex: 1,
        flex: 0,
        justifyContent: 'center',
        height: 0.085 * windowHeight,
        alignItems: 'center',
        // alignItems: 'flex-start',
        // borderWidth:1,
      },
      selectedMenuItem: {
        backgroundColor: '#F8F8FF',
        borderLeftColor: 'purple',
        borderLeftWidth: 5,
      },
    
      menuItemText: {
        marginLeft: 10,
        alignSelf: 'flex-start',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
    
      // settings column -right
      settingsColumn: {
        flex: .6,
        padding: 15,
      },

      filterWindow: {
        flex: 8,
        padding : 5
      }

});
