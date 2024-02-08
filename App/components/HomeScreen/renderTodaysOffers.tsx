import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';

interface RenderTodaysOffersProps {
  item: {
    id: string;
    imageUrl: string;
    company: string;
    tagLine: string;
    date: string;
  };
}

const { width } = Dimensions.get('window');
const RenderTodaysOffers: FC<RenderTodaysOffersProps> = ({ item }) => {
  return (
    <View style={styles.sliderContent}>
      <Image source={{ uri: item.imageUrl }} style={styles.sliderItemBackground} />
      <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
          style={styles.gradient}>
      <View style={styles.textContainer}>
        <View style={styles.companyView}>
        <Text style={styles.companyText}>{item.company}</Text>
        </View>
        <Text style={styles.tagLineText}>{item.tagLine}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      </LinearGradient>
    </View>
  );
};

export default RenderTodaysOffers;

const styles = StyleSheet.create({
  sliderContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    borderRadius: 10,
    position: 'relative',
  },
  sliderItemBackground: {
    width: '100%',
    height: width - 180,
    resizeMode: 'cover',
   
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
   
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  companyText: {
    color: Colors.Iconwhite,
    fontSize: 14,
    textAlign:'center',
    fontWeight: 'bold',
  },
  tagLineText: {
    color: Colors.Iconwhite,
    flexWrap:'wrap',
    fontSize: 26,
    fontWeight:'bold',
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    
  },
  dateText: {
    color: Colors.Iconwhite,
    fontSize: 13,
    fontWeight:'bold',
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  companyView:{
    padding:5,
    backgroundColor:Colors.primary,
    width:100,
    justifyContent:'center',
    borderRadius:20
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
});
