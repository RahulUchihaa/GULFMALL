import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const imageWidth = 200;
const imageHeight = 270;


type RenderEventsProps = {
    item:{
        imageUrl:string;
        tagLine:string;
        floor:string
    }
}

const RenderEvents:React.FC<RenderEventsProps> = ({item,}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={()=>navigation.navigate("ShopOfferDetails",{
      details:"dummy details",imageUrl:item.imageUrl
    })}>
    <View style={styles.slideContainer}>
    <Image
      source={{uri: item.imageUrl}}
      style={[styles.image, {width: imageWidth, height: imageHeight}]}
    />
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
      style={styles.gradient}>

    <View style={styles.slideContent}>
      <Text style={styles.tagLine}>{item.tagLine}</Text>
      <View style={styles.floorContainer}>
        <Text style={styles.floor}>{item.floor}</Text>
      </View>
    </View>
    </LinearGradient>
  </View>
  </TouchableOpacity>
  )
}

export default RenderEvents

const styles = StyleSheet.create({
    slideContainer: {
        alignItems: 'center',
        margin: 10,
      },
      image: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: 8,
    
        overflow: 'hidden',
      },
      slideContent: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'flex-start',
      },
      tagLine: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.Iconwhite,
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
      },
      floor: {
        fontSize: 12,
        color: Colors.Iconwhite,
      },
      date: {
        fontSize: 14,
        color: 'black',
      },
      gradient: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
      },
      floorContainer: {
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 20,
        marginTop: 5,
      },
})