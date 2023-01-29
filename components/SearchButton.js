import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ingredients } from '../utils/Vegetable';
import { useDetectClickOutside } from 'react-detect-click-outside';

const SearchButton = () => {
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(ingredients);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const searchRef = useRef();
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const handleDropdown = () => {
        setDisplayDropdown((prevState) => !prevState);
      };
    const closeDropdown = () => {
        setDisplayDropdown(false);
    } 
    const onSearch = search => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(ingredients);
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
          }}
        />

        <FlatList
          data={data}
          extraData = {selectedIngredients}
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
                }}
                onPress={() => {
                  if(selectedIngredients.filter(ingredient => ingredient.name === item.name).length === 0) {
                      const ing = [...selectedIngredients];
                      ing.push(item);
                      setSelectedIngredients(ing);
                  }
                  onSearch('');
                  setSearch('');
                }}>
                <View style = {{flexDirection: 'row', padding: 10}}>
                  <Image source={{uri: item.url}} style={{width: 40, height: 40, paddingRight: 50, resizeMode: 'cover', borderRadius: 5}}></Image>
                  <Text style={{fontWeight: '600', paddingLeft: 60, alignSelf: 'center'}}>{item.name} ({item.hindiName})</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
   }

  return (
    <View style={{flex: 1}}>
      <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
            width: 0.75*windowWidth,
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingBottom: 15,
          }}>

      <FlatList
            data={selectedIngredients}
            contentContainerStyle={{ flexDirection: "row", flexWrap:'wrap' }}
            renderItem={({item}) => {
                console.log(selectedIngredients);
              return (
                <View style = {{
                    flexDirection: 'row',
                    elevation: 5,
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    marginRight: 9,
                    marginBottom: 9}}>
                    <Image source={{uri: item.url}} style={{width: 30, height: 30}}></Image>
                    <Text style = {{justifyContent: 'center', paddingLeft: 9}}>{item.name}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            const ingredients1 = selectedIngredients.filter(ingredient => ingredient.name !== item.name)
                            setSelectedIngredients(ingredients1);
                        }}>
                        <View style={styles.iconWrapper}>
                            <AntDesign name='close' style={styles.icon} size={15} />
                        </View> 
                    </TouchableOpacity>
                </View>
              );
            }}
          />    
      </View>
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
        }}
        onPress={() => {
          // console.log(selectedIngredients);
          setClicked(!clicked);
        }}>
        <View style={styles.iconWrapper}>
            <AntDesign name='search1' style={styles.icon} size={22} />
        </View>
        <View style={styles.btnTxtWrapper}>
            <Text style={[styles.buttonText]}>Select Ingredients now</Text>
        </View>   


        {/* {clicked ? (
          <Image
            source={require('./upload.png')}
            style={{width: 20, height: 20}}
          />
        ) : (
          <Image
            source={require('./dropdown.png')}
            style={{width: 20, height: 20}}
          />
        )} */}
      </TouchableOpacity>
      {clicked ? (
        <Dropdown/>
      ) : null}
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      borderRadius: 30,
      width: '70%',
      height: windowHeight / 15,
      padding: 10,
      flexDirection: 'row'
    },
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
    },
  });