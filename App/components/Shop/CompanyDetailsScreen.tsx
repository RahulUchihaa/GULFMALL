import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Text} from 'react-native-paper';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const CompanyDetailsScreen = ({route}) => {
  const {companyName, floor, image} = route.params;
  const navigation = useNavigation();
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

  const {t} = useTranslation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'about', title: t('home.about')},
    {key: 'storeDetails', title: t('home.store_details')},
  ]);

  const renderScene = SceneMap({
    about: () => (
      <View style={styles.tabContainer}>
        <Text style={styles.tabContent}>
          As the sun dipped below the horizon, casting a warm glow over the
          quaint town, the bustling streets came alive with the rhythmic hum of
          shoppers strolling through the array of shops that lined the
          cobblestone sidewalks. From the aromatic bakery where the scent of
          freshly baked bread wafted through the air to the cozy bookshop with
          shelves adorned with literary treasures, there was something to
          captivate every passerby. The vibrant market square buzzed with
          activity as vendors proudly displayed their wares, tempting shoppers
          with colorful fruits, artisan crafts, and fragrant flowers. Amidst the
          hustle and bustle, a quaint antique shop stood like a time capsule,
          beckoning curious souls to explore its hidden treasures and uncover
          stories from bygone eras. Meanwhile, the trendy boutique showcased the
          latest fashion trends, its window displays adorned with chic ensembles
          that promised to transform any wardrobe. As laughter mingled with the
          chatter of eager shoppers, the shopkeepers greeted each visitor with
          warmth and hospitality, ensuring that every experience was not just a
          transaction but a memorable journey through a tapestry of sights,
          sounds, and sensations
        </Text>
      </View>
    ),
    storeDetails: () => (
      <View style={styles.tabContainer}>
        <View style={{justifyContent: 'space-between',alignItems:'center', flexDirection:isRtl === 'ar' ? 'row-reverse' :  'row'}}>
          <View style={{flexDirection:isRtl === 'ar' ? 'row-reverse' :  'row',alignItems:'center',}}>
            <Icon
              name="location-outline"
              size={24}
              color={Colors.primary}
              style={[styles.icon,{marginRight:isRtl === 'en' ? 6:0,marginLeft:isRtl === 'ar' ?  6 : 0}]}
            />
            <Text style={{color: Colors.black, fontSize: 17,}}>{t('home.level')}</Text>
          </View>
          <Text style={{color: Colors.black, fontSize: 17, fontWeight: 'bold'}}>
            {' '}
            {floor.toUpperCase()}
          </Text>
        </View>
        <View style={{justifyContent: 'space-between',alignItems:'center',flexDirection:isRtl === 'ar' ? 'row-reverse' :  'row',marginTop:10}}>
          <View style={{flexDirection:isRtl === 'ar' ? 'row-reverse' :  'row',  alignItems:'center',}}>
            <Icon
              name="call"
              size={24}
              color={Colors.primary}
              style={[styles.icon,{marginRight:isRtl === 'en' ? 6:0,marginLeft:isRtl === 'ar' ?  6 : 0}]}
            />
            <Text style={{color: Colors.black, fontSize: 17,}}>{t('home.phone')}</Text>
          </View>
          <Text style={{color: Colors.black, fontSize: 17, fontWeight: 'bold'}}>
            {' '}
            7892380489
          </Text>
        </View>
      </View>
    ),
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
      labelStyle={styles.labelStyle}
    />
  );

  const renderHeaderPosition = () => {
    const headerPosition = {
      position: 'absolute',
      top: 10,
      [isRtl === 'ar' ? 'right' : 'left']: 10,
      zIndex: 1,
    };

    return headerPosition;
  };

  return (
    <View style={styles.detailContainer}>
      <View style={renderHeaderPosition()}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name= {isRtl==='ar' ? "arrow-forward": "arrow-back"}
            size={30}
            color={Colors.black}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <Image source={{uri: image}} style={styles.detailImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.visitListButton]}>
          <Icon name="add" size={20} color={Colors.black} style={styles.icon} />
          <Text style={styles.buttonText}>{t('home.add_to_Visitlist')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveForLaterButton]}>
          <Icon
            name="heart"
            size={20}
            color={Colors.black}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>{t('home.save_for_later')}</Text>
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default CompanyDetailsScreen;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backIcon: {
    fontSize: 30,
    color: Colors.black,
  },
  detailImage: {
    height: 250,
    resizeMode: 'cover',
  },
  tabContainer: {
    flex: 1,
    padding: 20,
  },
  tabIndicator: {
    backgroundColor: Colors.primary,
  },
  tabBar: {
    backgroundColor: 'white',
  },
  tabContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  labelStyle: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    borderRadius: 3,
  },
  visitListButton: {
    marginRight: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  saveForLaterButton: {
    borderColor: Colors.primary,
    borderWidth: 1,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
});
