import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import i18next from '../I18n/il8n'; // Import I18nManager
import TabIcon from '../components/TabBarIcon/tabBarIcon';
import Colors from '../constants/Colors';
import Home from '../screens/Home';
import Map from '../screens/Map';
import More from '../screens/More';
import Services from '../screens/Services';
import Shop from '../screens/Shop';

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {

const [isRtl, setIsRtl] = React.useState(i18next.language);
const {t} = useTranslation();

React.useEffect(() => {
  const languageChangeHandler = () => {
    setIsRtl(i18next.language);
  };
 i18next.on('languageChanged', languageChangeHandler);
 
  return () => {
    i18next.off('languageChanged', languageChangeHandler);
  }
}, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          padding: 2,
          height: Platform.OS === 'ios' ? 70 : 62,
          backgroundColor: Colors.Iconwhite,
          flexDirection: isRtl === 'ar' ? 'row-reverse' : 'row', 
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {isRtl === 'en' ? (
        <>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: props => (
                <TabIcon name="home-outline" {...props} label="Home" />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={Shop}
            options={{
              tabBarIcon: props => (
                <TabIcon name="cart-outline" {...props} label="Shop" />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarIcon: props => (
                <TabIcon name="map-marker-outline" {...props} label="Map" />
              ),
            }}
          />
          <Tab.Screen
            name="Services"
            component={Services}
            options={{
              tabBarIcon: props => (
                <TabIcon
                  name="information-outline"
                  {...props}
                  label="Services"
                />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={More}
            options={{
              tabBarIcon: props => (
                <TabIcon name="dots-horizontal" {...props} label="More" />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
             name='More'
            component={More}
            options={{
              tabBarIcon: props => (
                <TabIcon name="dots-horizontal" {...props} label={t('home.more')} />
              ),
            }}
          />
          <Tab.Screen
           name='Services'
            component={Services}
            options={{
              tabBarIcon: props => (
                <TabIcon
                  name="information-outline"
                  {...props}
                  label={t('home.services')}
                />
              ),
            }}
          />
          <Tab.Screen
               name="Map"
            component={Map}
            options={{
              tabBarIcon: props => (
                <TabIcon name="map-marker-outline" {...props} label={t('home.map')} />
              ),
            }}
          />
          <Tab.Screen
            name='Shop'
            component={Shop}
            options={{
              tabBarIcon: props => (
                <TabIcon name="cart-outline" {...props} label={t('home.shop')} />
              ),
            }}
          />
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: props => (
                <TabIcon name="home-outline" {...props} label={t('home.home')} />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default MainNavigator;
