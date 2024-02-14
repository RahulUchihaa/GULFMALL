import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import { Divider } from 'react-native-paper';

const ShopsBasedOnCategories = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  // Dummy data for FlatList
  const data = [
    {
      id: '1',
      companyName: 'Bathing Ape',
      floor: 'First Floor',
      image: 'https://1000logos.net/wp-content/uploads/2018/04/Bape-logo.jpg',
    },
    {
      id: '2',
      companyName: 'Aape',
      floor: 'Ground Floor',
      image:
        'https://i.pinimg.com/originals/f5/27/07/f527074c3ee5f55521993eac99191973.png',
    },
    {
      id: '3',
      companyName: 'Abercrombie & Fitch',
      floor: 'First Floor',
      image:
        'https://1000logos.net/wp-content/uploads/2016/10/Abercrombie-and-Fitch-logo.png',
    },
    {
      id: '4',
      companyName: 'Aesop',
      floor: 'Ground Floor',
      image:
        'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ojjseceweky1bq0jurfw',
    },
    {
      id: '5',
      companyName: 'Aldo',
      floor: 'First Floor',
      image: 'https://logowik.com/content/uploads/images/aldo-group8341.jpg',
    },

    {
      id: '6',
      companyName: 'Alexander',
      floor: 'Ground Floor',
      image:
        'https://1000logos.net/wp-content/uploads/2018/12/Alexander-Mcqueen-logo.jpg',
    },
    {
      id: '7',
      companyName: 'American Eagle',
      floor: 'First Floor',
      image:
        'https://loyalty360.org/getattachment/c26a1656-ec56-4ca3-b2aa-57f62a08aafc/image',
    },
    {
      id: '8',
      companyName: 'Jockey',
      floor: 'Ground Floor',
      image: 'https://1000logos.net/wp-content/uploads/2020/07/Jockey-Logo.png',
    },
    {
      id: '9',
      companyName: 'Fila',
      floor: 'First Floor',
      image:
        'https://i.pinimg.com/736x/6b/e8/64/6be864397659e5e554783c0993f8ca34.jpg',
    },
    {
      id: '10',
      companyName: 'Calvin Klein',
      floor: 'Ground Floor',
      image:
        'https://logolook.net/wp-content/uploads/2023/03/Calvin-Klein-Logo.png',
    },
    {
      id: '11',
      companyName: 'Calida',
      floor: 'First Floor',
      image:
        'https://fashionunited.com/img/upload/2023/09/20/linkedin-profilbild-1080x1080px-9jlmxt46-2023-03-23-md3c614n-2023-09-20.png',
    },
    {
      id: '12',
      companyName: 'Quatro',
      floor: 'Ground Floor',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7c4fcc42414959.56071d37ef39b.jpg',
    },
    // Add more dummy data as needed
  ];

  const filteredData = data
    .filter(item =>
      item.companyName.toLowerCase().includes(searchText.toLowerCase()),
    )
    .sort((a, b) => a.companyName.localeCompare(b.companyName));

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("CompanyDetails",{companyName:item.companyName,
      floor:item.floor,image:item.image})}>
      <View style={styles.listItem}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{item.companyName}</Text>
          <Text style={styles.floorText}>{item.floor.toUpperCase()}</Text>
        </View>
         {/* Add Divider */}
      
      </View>
      {/* Custom Divider */}
      <Divider style={styles.divider} /> 
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={30}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <Icon
            name="search"
            size={20}
            color={Colors.black}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={() => <Divider style={styles.divider} />} 
      />
    </View>
  );
};

export default ShopsBasedOnCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Iconwhite,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: Colors.primary,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchBar: {
    flex: 1,
    padding: 5,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Iconwhite,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 0.1,
    borderColor: Colors.primary,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  floorText: {
    marginLeft: 'auto',
    color: Colors.primary, // This will move the floor text to the right end
  },
  companyName: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
   divider: {
    backgroundColor: Colors.grey,
    marginVertical: 5,
    opacity:0.3
  },
});
