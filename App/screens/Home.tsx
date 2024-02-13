import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RenderEvents from '../components/Dashboard/RenderEvents';
import RenderSliders from '../components/Dashboard/RenderSliders';
import Header from '../components/Header/Header';
import RenderTodaysOffers from '../components/HomeScreen/renderTodaysOffers';
import Colors from '../constants/Colors';

const {width} = Dimensions.get('window');

const Home = ({navigation}:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [EventsactiveIndex, setActiveEventsIndex] = useState(0);
  const [todaysoffersIndex, setTodaysOffersIndex] = useState(0);

  const data2 = [
    {
      id: '1',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1683121479906-1168951e0d1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Summer Collection Offers',
      date: '25 JAN - 05 APR',
    },
    {
      id: '2',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1683134271694-61df670ca1be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Bargains Await: Dive into the Mall of Offers',
      date: '25 JAN - 05 APR',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1562215991-08f3dc328f57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Score Big, Save Bigger: Mall Madness Begins Now!',
      date: '25 JAN - 05 APR',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Shop Smart, Save Big: Your Mall, Your Deals',
      date: '25 JAN - 05 APR',
    },
  ];

  const Events = [
    {
      id: '1',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1683121479906-1168951e0d1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Summer Collection Offers',
      floor: 'First Floor',
    },
    {
      id: '2',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1683134271694-61df670ca1be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Bargains Await: Dive into the Mall of Offers',
      floor: 'Ground Floor',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1562215991-08f3dc328f57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Score Big, Save Bigger: Mall Madness Begins Now!',
      floor: 'Basement',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Shop Smart, Save Big: Your Mall, Your Deals',
      floor: 'First Floor',
    },
  ];

  const Offers = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      company: 'Al-BEK',
      tagLine: 'This is a dummy Tag Line',
      date: '25 JAN - 05 APR',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      company: 'Al Amanah',
      tagLine: 'A dinner expereince like no other',
      date: '25 JAN - 05 APR',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      company: 'Cafe Murano',
      tagLine: 'The dessert that leaves you satisfied',
      date: '25 JAN - 05 APR',
    },
  ];

  const handleNavigation = ({e}:any) =>{
    console.log(e);
    navigation.navigate("Shop");
  }

 
  return (
    <View style={styles.container}>
      {/* Header Part */}
      <Header />
      <ScrollView>
        {/* Sliders */}
        <View>
          <FlatList
            data={data2}
            renderItem={({item}) => (
              <RenderSliders
                item={item}
                dataLength={data2}
                currentIndex={activeIndex}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            onScroll={data =>
              setActiveIndex(
                Math.round(data.nativeEvent.contentOffset.x / width),
              )
            }
            snapToAlignment="center"
            decelerationRate={'fast'}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Menu Part */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton} onPress={()=>handleNavigation("Shop")}>
            <View style={styles.iconBackground}>
              <Icon
                name="shopping-basket"
                size={18}
                color={Colors.primary}
                style={styles.icon}
              />
            </View>
            <Text style={styles.menuText}>Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={()=>handleNavigation("Shop")}>
            <View style={styles.iconBackground}>
              <Icon
                name="fastfood"
                size={18}
                color={Colors.primary}
                style={styles.icon}
              />
            </View>
            <Text style={styles.menuText}>Dining</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={()=>handleNavigation("Shop")}>
            <View style={styles.iconBackground}>
              <Icon
                name="tv"
                size={18}
                color={Colors.primary}
                style={styles.icon}
              />
            </View>
            <Text style={styles.menuText}>Entertain</Text>
          </TouchableOpacity>
        </View>
        {/* Events */}
        <View style={styles.Heading}>
          <View style={styles.HeadingView}>
            <Text style={styles.HeadingText}>Trending Events</Text>
            <Text style={styles.ViewAllText}>View All</Text>
          </View>
          <FlatList
            data={Events}
            renderItem={({item}) => (
              <RenderEvents
                item={item}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const offset = event.nativeEvent.contentOffset.x;
              const index = Math.round(offset / width);
              setActiveEventsIndex(index);
            }}
          />
        </View>

        {/* Offers */}
        <View style={styles.Heading}>
          <View style={styles.HeadingView}>
            <Text style={styles.HeadingText}>Today's Exclusive Offers</Text>
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <FlatList
            data={Offers}
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
        </View>
        <View style={styles.pagination}>
          {Offers.map((_: any, i: React.Key | null | undefined) => (
            <View
              key={i}
              style={i === todaysoffersIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </View>

        {/* My Visit List */}
        <View style={styles.Heading}>
          <View style={[styles.HeadingView, {justifyContent: 'center'}]}>
            <Text
              style={{
                color: Colors.black,
                marginBottom: 10,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              My Visit List
            </Text>
          </View>
        </View>
        <View style={{paddingLeft: 20,paddingRight:20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.iconContainer}>
                <Icon2
                  name="food-drumstick-outline"
                  color={'#885024'}
                  size={25}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 22,
                    color: Colors.black,
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
            <View style={{justifyContent: 'center', marginRight: 10}}>
              <View style={styles.iconContainer2}>
                <Icon3 name="person-running" color={Colors.Iconwhite} size={20} />
              </View>
            </View>
          </View>

          <View style={{justifyContent:'center',marginTop:20,marginBottom:20,alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:Colors.primary,padding:6,borderRadius:20,width:200}}>
            <Text style={{color:Colors.Iconwhite,fontWeight:'bold',textAlign:'center'}}>Manage my VisitList</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Iconwhite,
    flex: 1,
  },
  Heading: {
    padding: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  menuButton: {
    backgroundColor: Colors.black,
    borderRadius: 30,
    padding: 7,
    width: '30%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBackground: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    padding: 1,
    marginRight: 7,
  },
  icon: {
    marginRight: 0,
  },
  menuText: {
    color: Colors.Iconwhite,
  },
  HeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  HeadingText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  ViewAllText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    justifyContent: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  activeDot: {
    width: 25,
    height: 4,
    borderRadius: 10,
    margin: 5,
    backgroundColor: Colors.primary,
  },
  dot: {
    width: 15,
    height: 4,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#888',
  },
  iconContainer: {
    borderWidth: 0.5,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  iconContainer2: {
    borderWidth: 0.5,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginRight: 5,
    backgroundColor: Colors.primary,
    elevation:3,
    borderColor:"#fff"
  },
});

export default Home;
