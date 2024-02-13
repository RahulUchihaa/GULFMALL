import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';


interface RenderSlidersProps {
  item: {
    id: string;
    imageUrl: string;
    tagLine: string;
    date: string;
  };
  currentIndex: number; // Added prop for the current index
  dataLength: any;
}

const RenderSliders: React.FC<RenderSlidersProps> = ({
  item,
  currentIndex,
  dataLength,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
        style={[styles.gradient, { zIndex: 1 }]}>
        <View style={styles.overlay}>
          <Text style={styles.tagLine}>{item.tagLine}</Text>
          <Text style={styles.date}>{item.date}</Text>
          
        </View>
        <View style={styles.pagination}>
            {dataLength.map((_: any, i: React.Key | null | undefined) => (
              <View
                key={i}
                style={i === currentIndex ? styles.activeDot : styles.dot}
              />
            ))}
          </View>
      </LinearGradient>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: 270,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  overlay: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  tagLine: {
    fontSize: 25,
    lineHeight:35,
    fontWeight: 'bold',
    width: 200,
    color: Colors.Iconwhite,
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,// Text color
  },
  date: {
    fontSize: 14,
    color: Colors.Iconwhite,
    marginTop: 10,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 5, // Text color
  },
  pagination: {
    justifyContent: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  activeDot: {
    width: 25,
    height: 4,
    borderRadius: 10,
    margin: 5,
    backgroundColor: Colors.Iconwhite,
  },
  dot: {
    width: 15,
    height: 4,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#888',
  },
});

export default RenderSliders;
