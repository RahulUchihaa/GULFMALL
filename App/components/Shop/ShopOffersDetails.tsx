import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ShopOffersDetails = ({ route }) => {
  const { imageUrl, details } = route.params;
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']} style={styles.gradient}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.closeIconContainer} onPress={() => navigation.goBack()}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{details}</Text>
      </View>
    </View>
  );    
};

export default ShopOffersDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    
    justifyContent: 'flex-end',
  },
  image: {
    height: 300,
    resizeMode: 'cover',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  detailsText: {
    fontSize: 16,
  },
});
