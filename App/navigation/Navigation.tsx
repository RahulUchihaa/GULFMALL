import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, useNavigationContainerRef, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import theme from './theme';
import NotFoundScreen from '../screens/NotFoundScreen';
import MainNavigator from './MainNavigator';
import AnimatedSplash from '../screens/AnimatedSplash';
import Shop from '../screens/Shop';
import ShopsBasedOnCategories from '../components/Shop/ShopsBasedOnCategories';
import CompanyDetailsScreen from '../components/Shop/CompanyDetailsScreen';
import ShopOffersDetails from '../components/Shop/ShopOffersDetails';



export type RootStackParamList = {
  Root: any;
  NotFound: undefined;
  Splash:undefined;
  Shop:any;
  ShopsCategories:any;
  CompanyDetails:any;
  ShopOfferDetails:any;
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
  onReady,
}: {
  colorScheme?: ColorSchemeName;
  onReady?: (() => void) | undefined;
}) {
  const navigationRef = useNavigationContainerRef();
  const currentRouteRef = React.useRef<Route<string>>();

  const handleReady = () => {
    currentRouteRef.current = navigationRef.getCurrentRoute();
    onReady?.();
  };

  const handleStateChange = () => {
    const previousRoute = currentRouteRef.current;
    const currentRoute = navigationRef.getCurrentRoute();
    // Save the current route name for later comparison
    currentRouteRef.current = currentRoute;
    // console.log(currentRoute)
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme}
      onReady={handleReady}
      onStateChange={handleStateChange}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
       
      <Stack.Screen name="Root" component={MainNavigator} />
      <Stack.Screen name="Splash" component={AnimatedSplash} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ShopsCategories" component={ShopsBasedOnCategories}  />
      <Stack.Screen name="CompanyDetails" component={CompanyDetailsScreen}  />
      <Stack.Screen name="ShopOfferDetails" component={ShopOffersDetails}  />
    </Stack.Navigator>
  );
}
