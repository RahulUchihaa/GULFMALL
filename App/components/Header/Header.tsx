import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import i18next, {languageResources} from '../../I18n/il8n';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const currentLanguage = i18next.language;
  const changeLng = () => {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    i18next.changeLanguage(newLanguage);
  };

  const {t} = useTranslation();

  
  
  return (
    <View style={[styles.container,{flexDirection:currentLanguage === 'ar' ? "row-reverse" : "row"}]}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{height: 40, width: 40}}
        />
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoName}>{t('home.gulf_mall')}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={changeLng}>
        <Icon name={'language'} color={Colors.black} size={18} style={[styles.icon,{marginRight:10}]} />
        </TouchableOpacity>
    
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
    elevation:3,
    height:50
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
