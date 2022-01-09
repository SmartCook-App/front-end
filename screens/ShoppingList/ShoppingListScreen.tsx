import React, { FC, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  Keyboard
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Text } from 'react-native-animatable';
import styles from './ShoppingListStyles';
import { Divider } from 'react-native-paper';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import TopNavbar from '../../components/TopNavbar/TopNavbarComponent';
import SLL from './ShoppingListLanguages';
import SearchbarComponent from '../../components/Searchbar/SearchbarComponent';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface Props {
  navigation: any;
}

const ShoppingListScreen: FC<Props> = (props: Props) => {
  const state = useSelector((state: RootState) => state);

  const { navigation } = props;
  const [visibleShowAddItem, setVisibleShowAddItem] = useState(false);
  const DATA = [
    {
      id: '1',
      title: 'Fideos',
    },
    {
      id: '2',
      title: 'Quix',
    },
    {
      id: '3',
      title: 'Queso Parmesano',
    },
    {
      id: '4',
      title: 'Salmon',
    },
    {
      id: '5',
      title: 'Tomate',
    },
    {
      id: '6',
      title: 'Pan',
    },
    {
      id: '7',
      title: 'Lechuga',
    },
    {
      id: '8',
      title: 'Mantequilla',
    },
    {
      id: '9',
      title: 'Sal',
    },
  ];

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setVisibleShowAddItem(false);
    });

    return () => {
      hideKeyboard.remove();
    };
  }, []);

  const showItemToList = () => {
    setVisibleShowAddItem(!visibleShowAddItem);
  };
  const addItemToList = () => {
    console.log('AGREGAR ITEMS');
  };
  const confirmDelete = () =>
    Alert.alert(
      SLL[state.language].confirmMarkListCompleted,
      SLL[state.language].whatHappensWhenMarkingListCompleted,
      [
        {
          text: SLL[state.language].yes,
          onPress: () => console.log('Sí'),
        },
        {
          text: SLL[state.language].no,
          onPress: () => console.log('No'),
        },
      ]
    );

  const deleteButton = () => {
    console.log('delete');
  };
  const RenderRight = (progress: any, dragX: any) => {
    return (
      <TouchableOpacity onPress={deleteButton}>
        <View style={styles.rightActions}>
          <Text style={[styles.actionText]}>{SLL[state.language].delete}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const Item = (title: any) => {
    return (
      <Swipeable renderRightActions={RenderRight}>
        <View style={styles.itemContainer}>
          <IoniconsIcon
            name="pizza-outline"
            style={styles.ingredientIcon}
            size={30}
          />
          <View style={styles.ingredientContainer}>
            <View style={styles.textAndQuantityContainer}>
              <Text style={styles.ingredientText}>{title.title}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityIconsButton}>
                  <IoniconsIcon
                    name="remove-outline"
                    style={styles.quantityIcons}
                    size={20}
                  />
                </TouchableOpacity>
                <Text style={styles.quantityText}>
                  {1} {SLL[state.language].units}
                </Text>
                <TouchableOpacity style={styles.quantityIconsButton}>
                  <IoniconsIcon
                    name="add-outline"
                    style={styles.quantityIcons}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Divider style={styles.divider} />
          </View>
        </View>
      </Swipeable>
    );
  };

  const renderItem = (item: any) => <Item title={item.item['title']} />;

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.backgroundContainer}>
            <TopNavbar
              title={'LISTA DE COMPRAS'}
              goBack={false}
              navigation={navigation}
            />
            <SearchbarComponent
              placeholderText={SLL[state.language].searchbarPlaceholder}
            />
            <View style={styles.listContainer}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.bottomContainer}>
              {visibleShowAddItem ? (
                <View style={styles.bottomContainer}>
                  <TextInput
                    autoFocus={true}
                    style={styles.addItemBar}
                    placeholder={SLL[state.language].whatDoYouNeedToAdd}
                  />
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={addItemToList}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.finishedListButton}
                    onPress={confirmDelete}
                  >
                    <Text style={styles.finishedListText}>
                      {SLL[state.language].finishButtonLabel}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={showItemToList}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ShoppingListScreen;
