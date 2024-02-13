import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type RenderShopCategoriesProps = {
  item: {
    imageUrl: string;
    id: string;
    category: string;
  };
};

const RenderShopCategories: React.FC<RenderShopCategoriesProps> = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ShopsCategories")} >
      <View style={Styles.categoryItem}>
        <Image source={{uri: item.imageUrl}} style={Styles.categoryImage} />
        <Text style={Styles.categoryText}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderShopCategories;

const Styles = StyleSheet.create({
  categoryItem: {
    margin: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 105,
    height: 105,
    borderRadius: 5,
  },
  categoryText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
