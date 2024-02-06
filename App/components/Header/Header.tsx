import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={'user-circle-o'} color={Colors.primary} size={30} style={styles.icon} />
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>GULF MALL</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name={'bell-o'} color={Colors.primary} size={30} style={styles.icon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoText: {
    fontSize: 10,
    color: Colors.primary,
    textAlign: 'center',
  },
  icon: {
    marginTop: 20,
  },
});
