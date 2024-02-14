import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type SubHeaderProps = {
  Heading: string;
};

const SubHeader: React.FC<SubHeaderProps> = ({Heading}) => {
  const [isRtl, setIsRtl] = React.useState(i18next.language);
  React.useEffect(() => {
    const languageChangeHandler = () => {
      setIsRtl(i18next.language);
    };
   i18next.on('languageChanged', languageChangeHandler);
   
    return () => {
      i18next.off('languageChanged', languageChangeHandler);
    }
  }, []);
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={[styles.container,{flexDirection: isRtl === 'ar' ? 'row-reverse' : 'row'}]}>
      <View style={[styles.iconContainer,,{flexDirection: isRtl === 'ar' ? 'row-reverse' : 'row'}]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon2
            name={isRtl==='ar'?'arrow-right':'arrow-left'}
            color={Colors.black}
            size={18}
            style={[styles.icon,{marginLeft:isRtl==='ar'?8:0 , marginRight : isRtl === 'ar' ? 0 : 8}]}
          />
        </TouchableOpacity>

        <View style={styles.logoTextContainer}>
          <Text style={styles.logoName}>{Heading}</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ShopsCategories')}>
          <Icon
            name={'search'}
            color={Colors.black}
            size={18}
            style={[styles.icon, {marginRight: 20}]}
          />
        </TouchableOpacity>
        <View>
          <Icon
            name={'bell-o'}
            color={Colors.black}
            size={18}
            style={styles.icon}
          />

          <View
            style={{
              width: 7,
              borderRadius: 30,
              backgroundColor: Colors.primary,
              position: 'absolute',
              bottom: 12,
              left: 10,
              right: 0,
              height: 7,
            }}></View>
        </View>

        <Icon
          name={'heart-o'}
          color={Colors.black}
          size={18}
          style={[styles.icon, {marginLeft: 10}]}
        />
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.Iconwhite,
    alignItems: 'center',
    elevation: 3,
    height: 50,
  },
  iconContainer: {
    marginHorizontal: 15,
    flexDirection:'row',
    alignItems: 'center',
  },
  logoTextContainer: {
    marginLeft: 5,
  },
  logoName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
  },
  logoSubName: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.grey,
  },
  icon: {
    marginTop: 0,
    marginRight: 8,
  },
});
