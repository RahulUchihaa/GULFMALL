import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type RenderShopsProps = {
  item: {
    imageUrl: string;
    id: string;
  };
 
};

const RenderShops: React.FC<RenderShopsProps> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CompanyDetails', {
          companyName: 'dummy',
          floor: 'dummy',
          image: item.imageUrl,
        })
      }>
      <View style={Styles.categoryItem}>
        <Image source={{uri: item.imageUrl}} style={Styles.category2Image} />
      </View>
    </TouchableOpacity>
  );
};

export default RenderShops;

const Styles = StyleSheet.create({
  category2Image: {
    width: 74,
    height: 72,
    borderRadius: 5,
  },
  categoryItem: {
    margin: 10,
    alignItems: 'center',
  },
});
