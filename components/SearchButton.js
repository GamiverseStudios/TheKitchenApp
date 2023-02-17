import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { PantryContext } from '../navigation/PantrySharedData.android.';

const SearchButton = () => {
    const {pantryType, setPantryType, pantryTypeList, setPantryTypeList, ingredientList, setIngredientList} = useContext(PantryContext);
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(ingredientList);
    const searchRef = useRef();
    const onSearch = search => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(ingredientList);
      }
    };

   const Dropdown = () => {
    return(
        <View
        style={{
          elevation: 5,
          marginTop: 20,
          height: 300,
          alignSelf: 'center',
          width: 0.75*windowWidth,
          backgroundColor: '#fff',
          borderRadius: 10,
          color: 'black',
        }}>
        <TextInput
          placeholder="Search.."
          value={search}
          ref={searchRef}
          onChangeText={txt => {
            onSearch(txt);
            setSearch(txt);
          }}
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 0.2,
            borderColor: '#8e8e8e',
            borderRadius: 7,
            marginTop: 20,
            paddingLeft: 20,
            color: 'black',
          }}
        />

        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '85%',
                  alignSelf: 'center',
                  height: 50,
                  justifyContent: 'center',
                  borderBottomWidth: 0.5,
                  borderColor: '#8e8e8e',
                  backgroundColor : item.isSelected ? '#FDD4D7' : 'white',
                  borderRadius : 5, 
                  margin : 3
                }}
                onPress={() => {
                  item.isSelected = !item.isSelected;
                  onSearch('');
                  setSearch('');
                }}>
                <View style = {{flexDirection: 'row', padding: 10}}>
                  <Text style={{fontWeight: '600', paddingLeft: 60, alignSelf: 'center', color: 'black'}}>{item.name} ({item.hindi_name})</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
   }

  return (
    <View>
      <TouchableOpacity
        style={{
          width: 0.9 * windowWidth,
          height: 50,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: '#ccc',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          shadowOpacity: '50%',
          shadowColor: '#8e8e8e',
          marginTop: 10
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <View style={styles.iconWrapper}>
            <AntDesign name='search1' style={styles.icon} size={22} />
        </View>
        <View style={styles.btnTxtWrapper}>
            <Text style={[styles.buttonText]}>Select Ingredients now</Text>
        </View>   
      </TouchableOpacity>
      {clicked ? (
        <Dropdown/>
      ) : null}
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Lato-Regular',
      color: 'black',
    },
  });