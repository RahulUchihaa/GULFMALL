import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import SubHeader from '../components/Header/SubHeader';
import RenderSliders from '../components/RenderSliders';
import Colors from '../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import RenderEvents from '../components/Dashboard/RenderEvents';
import RenderShops from '../components/Dashboard/RenderShops';
import RenderShopCategories from '../components/Dashboard/RenderShopCategories';

const {width} = Dimensions.get('window');

const Shop = () => {
  const data2 = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Summer Collection Offers',
      date: '25 JAN - 05 APR',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Bargains Await: Dive into the Mall of Offers',
      date: '25 JAN - 05 APR',
    },
    {
      id: '3',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1664202526132-7da09cfeb243?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Score Big, Save Bigger: Mall Madness Begins Now!',
      date: '25 JAN - 05 APR',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1629140877328-77e5a10019e1?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Shop Smart, Save Big: Your Mall, Your Deals',
      date: '25 JAN - 05 APR',
    },
  ];

  const Category = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Men',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Women',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2lkc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Kids',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWNzfGVufDB8fDB8fHww',
      category: 'Beauty',
    },
    {
      id: '5',
      imageUrl:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Electronics',
    },
    {
      id: '6',
      imageUrl:
        'https://images.unsplash.com/photo-1680477425240-cad536a96703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEpld2VsZXJpZXMlMjBhbmQlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Jewellery & Watches',
    },
  ];

  const ShopBrands = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1620848616916-3efaf499adcb?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1617611413968-537a2ba4986d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1548364538-60b952c308b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEd1Y2NpJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const Events = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1564327368633-151ef1d45021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhZmV8ZW58MHx8MHx8fDA%3D',
      tagLine: 'Jamaica Blue Fine COffees',
      floor: 'Ground Floor',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Beirutina Lebanese bistro',
      floor: 'Ground Floor',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEljZSUyMGNyZWFtfGVufDB8fDB8fHww',
      tagLine: 'Baskins Robbin',
      floor: 'First Floor',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tagLine: 'Sky Cookies',
      floor: 'Ground Floor',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView style={Styles.Container}>
      <SubHeader Heading="Shop" />

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
            setActiveIndex(Math.round(data.nativeEvent.contentOffset.x / width))
          }
          snapToAlignment="center"
          decelerationRate={'fast'}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={Styles.Heading}>
        <View style={[Styles.HeadingView, {justifyContent: 'flex-start'}]}>
          <Text
            style={{
              color: Colors.black,
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Shop By Category
          </Text>
        </View>
      </View>
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <FlatList
          data={Category}
          horizontal
          renderItem={({item})=><RenderShopCategories item={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={Styles.Heading}>
        <View style={[Styles.HeadingView]}>
          <Text
            style={{
              color: Colors.black,
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Discover Top Shops
          </Text>
          <Text
            style={{
              color: Colors.primary,
              textAlign: 'right',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            View All
          </Text>
        </View>
      </View>
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <FlatList
          data={ShopBrands}
          horizontal
          renderItem={({item})=><RenderShops item={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={Styles.Heading}>
        <View style={[Styles.HeadingView]}>
          <Text
            style={{
              color: Colors.black,
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Have you Tried
          </Text>
        </View>
        <FlatList
        data={Events}
        renderItem={({item}) => <RenderEvents item={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      
      />
      </View>
   
    </ScrollView>
  );
};

export default Shop;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Iconwhite,
  },
  Heading: {
    padding: 10,
  },
  HeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

});
