import React, { FC, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../assets/Colors';
import { RootState } from '../../redux/store';
import { Searchbar } from 'react-native-paper';
import style from './SearchbarStyles';

interface Props {
  placeholderText: any;
  navigation: any;
}

const SearchbarComponent: FC<Props> = (props: Props) => {
  const { placeholderText, navigation } = props;
  const state = useSelector((state: RootState) => state);
  const [searchQuery, setSearchQuery] = useState('');
  const [renderSearchRecipes, setRenderSearchRecipes] = useState<any>([]);
  const onChangeSearch = (query: any) => {
    setSearchQuery(query);
    if (query) {
      // Inserted text is not blank
      const newData = state.recipes
        .allCurrentRecipes!.filter(function (item: any) {
          return item.name.toLowerCase().startsWith(query.toLowerCase());
        })
        .map(function ({ id, name }) {
          return { id, name };
        });
      setRenderSearchRecipes(newData);
    } else {
      // Inserted text is blank
      setRenderSearchRecipes([]);
    }
  };

  const renderRecipes = (item: any) => (
    <TouchableOpacity style={style.searchContainer}>
      <Text style={style.searchItem} onPress={() => getItem(item)}>
        {item.item.name}
      </Text>
    </TouchableOpacity>
  );

  const getItem = (searchedItem: any) => {
    const searchedData = state.recipes
      .allCurrentRecipes!.filter(function (item: any) {
        return item.name.toLowerCase().startsWith(searchedItem.item.name.toLowerCase());
      })
      .map(function ({ id, name }) {
        return { id, name };
      });
      console.log(searchedData);
      setSearchQuery('');
      setRenderSearchRecipes([]);
      navigate('RecipeHomeScreen');
  };
  const onPressRecipe = () => {
    navigation.navigate('RecipeHomeScreen');
  };
  return (
    <>
      <View style={style.searchbarContainer}>
        <Searchbar
          style={style.searchbar}
          placeholder={placeholderText}
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor={Colors.light.yellow}
        />
      </View>
      {renderSearchRecipes.length != 0 ? (
        <View style={style.searchListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={renderSearchRecipes}
            renderItem={renderRecipes}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      ) : null}
    </>
  );
};

export default SearchbarComponent;
