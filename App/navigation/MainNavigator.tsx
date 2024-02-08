import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import Map from '../screens/Map';
import Services from '../screens/Services';
import More from '../screens/More';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import TabIcon from '../components/TabBarIcon/tabBarIcon';
import {CommonActions} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();


const MainNavigator: React.FC = () => {
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
          
        },
        // tabBarBackground: () => (
        //   <BlurView
        //     overlayColor=""
        //     blurAmount={15}
        //     reducedTransparencyFallbackColor="white"
        //     style={{
        //       position: 'absolute',
        //       top: 0,
        //       bottom: 0,
        //       left: 0,
        //       right: 0             
        //     }}
        //   />
        // ),
        headerShown: false,
        tabBarShowLabel: false,
      }}>
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
            <TabIcon name="information-outline" {...props} label="Services" />
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
    </Tab.Navigator>
  );
};

export default MainNavigator;
