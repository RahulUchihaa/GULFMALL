import {View, Image, StyleSheet} from 'react-native';
import React from 'react';


type RenderShopsProps = {
    item:{
        imageUrl:string,
        id:string
    }
}

const RenderShops:React.FC<RenderShopsProps> = ({item}) => {
  return (
    <View style={Styles.categoryItem}>
      <Image source={{uri: item.imageUrl}} style={Styles.category2Image} />
    </View>
  );
};

export default RenderShops

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
})
