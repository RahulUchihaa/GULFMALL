import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pagination from '../components/HomeScreen/Pagination';
import RenderSliders from '../components/HomeScreen/renderSliders';
import RenderTodaysOffers from '../components/HomeScreen/renderTodaysOffers';
import Colors from '../constants/Colors';
import RenderEvents from '../components/HomeScreen/renderEvents';

interface DataItem {
  id: string;
  imageUrl: string;
  text: string;
}

const {width, height} = Dimensions.get('window');

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [todaysoffersIndex, setTodaysOffersIndex] = useState(0);
  const flatListRef = useRef(null);

  const data: DataItem[] = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1552611052-d59a0d9741bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      text: 'Special Offer 1',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Special Offer 2',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      text: 'Special Offer 3',
    },
  ];

  const data2 = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1552611052-d59a0d9741bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      company: 'Al-BEK',
      tagLine: 'This is a dummy Tag Line',
      date: '25 JAN - 05 APR',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      company: 'Al Amanah',
      tagLine: 'A dinner expereince like no other',
      date: '25 JAN - 05 APR',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      company: 'Cafe Murano',
      tagLine: 'The dessert that leaves you satisfied',
      date: '25 JAN - 05 APR',
    },
  ];
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#1a1a1a'}}>
      <ImageBackground
        source={require('../assets/images/home1.jpg')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}
        />
        <View style={styles.contentContainer}>
          <View style={styles.offerName}>
            <Text
              style={{
                color: Colors.Iconwhite,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              MANGO
            </Text>
          </View>
          <Text style={styles.offer}> 20% STUDENT OFFER AT MANGO</Text>
          <Text style={styles.offerDate}>06 JAN - 01 JUN</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View all offers</Text>
          <Icon
            name="arrow-right-thin"
            color={Colors.Iconwhite}
            size={20}
            style={{marginRight: -3, marginLeft: 3}}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.sliderContainer}>
          <FlatList
            ref={flatListRef}
            data={data}
            renderItem={({item}) => <RenderSliders item={item} />}
            keyExtractor={item => item.id}
            onScroll={data =>
              setActiveIndex(
                Math.round(data.nativeEvent.contentOffset.x / width),
              )
            }
            horizontal
            snapToInterval={width}
            snapToAlignment="center"
            decelerationRate={'normal'}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      <Pagination data={data} index={activeIndex} />
      <View style={styles.todayOffers}>
        <Text
          style={{
            color: Colors.Iconwhite,
            marginBottom: 10,
            textAlign: 'left',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Today's Exclusive Offers
        </Text>
      </View>
      <FlatList
        data={data2}
        renderItem={({item}) => <RenderTodaysOffers item={item} />}
        keyExtractor={item => item.id}
        onScroll={data =>
          setTodaysOffersIndex(
            Math.round(data.nativeEvent.contentOffset.x / width),
          )
        }
        horizontal
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate={'normal'}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      <Pagination data={data} index={todaysoffersIndex} />
      <View style={styles.todayOffers}>
        <Text
          style={{
            color: Colors.Iconwhite,
            marginBottom: 10,
            textAlign: 'left',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Today's Exclusive Events
        </Text>

        <RenderEvents />
      </View>
      <View style={styles.todayOffers}>
        <Text
          style={{
            color: Colors.Iconwhite,
            marginBottom: 10,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          My Visit List
        </Text>

        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Icon name="food-drumstick-outline" color={'#885024'} size={25} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: Colors.Iconwhite,
                  fontWeight: 'bold',
                }}>
                KFC
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors['text-regular'],
                  fontWeight: 'bold',
                }}>
                FIRST FLOOR
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: height-200,
    resizeMode: 'cover',
  },
  sliderContainer: {
    padding: 20,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 130,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 520,
  },
  offer: {
    fontSize: 26,
    width: 220,
    textAlign: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
    color: Colors.Iconwhite,
    fontWeight: 'bold',
  },
  offerDate: {
    color: Colors.Iconwhite,
    marginTop: 5,
    fontSize: 15,
  },
  offerName: {
    padding: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Iconwhite,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: Colors.Iconwhite,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.Iconwhite,
    textAlign: 'center',
  },
  todayOffers: {
    padding: 20,
  },
  iconContainer:{
    borderWidth: 0.5,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginRight:10,
    backgroundColor: '#fff',
  }
});
