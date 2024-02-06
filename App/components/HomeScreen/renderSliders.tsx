import { StyleSheet, Image, View,Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

interface RenderSlidersProps {
    item: {
      id: string;
      imageUrl: string;
      text: string;
    };
  }

const {width} = Dimensions.get('window');

const RenderSliders = ({item}:RenderSlidersProps) => {
  return (
    <View style={styles.sliderContent}>
    <Image
      source={{uri: item.imageUrl}}
      style={styles.sliderItemBackground}></Image>
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']}
      style={styles.gradient} 
    />
  </View>
  )
}

export default RenderSliders

const styles = StyleSheet.create({

    sliderContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        borderRadius: 10,
      },
      sliderItemBackground: {
        width: '90%',
        height: width - 210,
        resizeMode: 'cover',
        borderRadius: 10,
      },
      gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 40,
      },
})