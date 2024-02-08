import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{height: 40, width: 40}}
        />
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoName}>GULF MALL</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View>
        <Icon name={'bell-o'} color={Colors.black} size={18} style={styles.icon} />
        <View style={{width:7,borderRadius:30,backgroundColor:Colors.primary,position:'absolute',bottom:12,left:10,right:0,height:7}}>

        </View>
        </View>
     
      <Icon name={'heart-o'} color={Colors.black} size={18} style={[styles.icon,{marginLeft:10}]} />
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
    backgroundColor:Colors.Iconwhite,
    alignItems: 'center',
    marginTop: 5
  },
  iconContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  logoTextContainer:{
    marginLeft:5
  },
  logoName:{
    fontSize:22,
    fontWeight:'bold',
    color:Colors.black
  },
  logoSubName:{
    fontSize:14,
    textAlign:'center',
    color:Colors.grey
  },
  icon: {
    marginTop: 0,
  },
});
