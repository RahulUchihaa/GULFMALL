import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Text } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CompanyDetailsScreen = ({ route }) => {
  const { companyName, floor, image } = route.params;
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'storeDetails', title: 'Store Details' },
  ]);

  const renderScene = SceneMap({
    about: () => (
      <View style={styles.tabContainer}>
        <Text style={styles.tabContent}>Company information goes here...</Text>
      </View>
    ),
    storeDetails: () => (
      <View style={styles.tabContainer}>
        <Text style={styles.tabContent}>Store details go here...</Text>
      </View>
    ),
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
      labelStyle={styles.labelStyle}
    />
  );

  return (
    <View style={styles.detailContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={Colors.black} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: image }} style={styles.detailImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.visitListButton]}>
          <Icon name="add" size={20} color={Colors.black} style={styles.icon} />
          <Text style={styles.buttonText}>Add to your Visit List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveForLaterButton]}>
          <Icon name="heart" size={20} color={Colors.black} style={styles.icon} />
          <Text style={styles.buttonText}>Save for later</Text>
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{ index, routes }}
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
    marginRight:10,
    borderColor:Colors.primary,
    borderWidth:1
  },
  saveForLaterButton: {
     borderColor:Colors.primary,
    borderWidth:1,
    marginLeft:10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: Colors.black,
    fontWeight:'bold'
  },
});
