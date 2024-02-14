import React,{useRef,useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Pagination from './Pagination';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const events = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1552611052-d59a0d9741bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    tagLine: 'This is a dummy Tag Line',
    floor: 'First Floor',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    tagLine: 'A dinner expereince like no other',
    floor: 'Second Floor',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    tagLine: 'The dessert that leaves you satisfied',
    floor: 'Ground Floor',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagLine: 'This is a dummy Tag Line',
    floor: 'Third Floor',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagLine: 'A dinner expereince like no other',
    floor: 'First Floor',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagLine: 'The dessert that leaves you satisfied',
    floor: 'Ground Floor',
  },
];

type EventsProps = {
  imageUrl: string;
  tagLine: string;
  floor: string;
};



const EventCard = ({ imageUrl, tagLine, floor }: EventsProps) => {
  const navigation = useNavigation();
    return (
      <TouchableOpacity  onPress={()=>navigation.navigate("ShopOfferDetails",{
        details:"dummy details",imageUrl:imageUrl
      })}>
 <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'transparent']} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 1 }} 
        style={styles.gradient}
      >
        <View style={styles.floorContainer}>
          <Text style={styles.floor}>{floor}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.tagLine}>{tagLine}</Text>
        </View>
      </LinearGradient>
      </View>
      </TouchableOpacity>
     
    );
  };

const EventsComponent = () => {
  // Create pairs of events for each page
  const pairedEvents = [];
  for (let i = 0; i < events.length; i += 2) {
    pairedEvents.push(events.slice(i, i + 2));
  }
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: any; }; layoutMeasurement: { width: any; }; }; }) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewWidth = event.nativeEvent.layoutMeasurement.width;
    const pageNum = Math.floor(contentOffsetX / viewWidth);
    setCurrentPage(pageNum);
  };
  return (
    <>
    <ScrollView
    ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={width * 0.9 + 20} 
      decelerationRate={"fast"}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.scrollView}>
      {pairedEvents.map((pair, index) => (
        <View key={index} style={styles.page}>
          {pair.map(event => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl}
              tagLine={event.tagLine}
              floor={event.floor}
            />
          ))}
        </View>
      ))}
    </ScrollView>
    <Pagination data={pairedEvents} index={currentPage} />
  </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  page: {
    width: width * 0.9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  card: {
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 0,
    padding: 10,
 
  },
  tagLine: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  floor: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign:'center'
  
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%', // Gradient covers the entire image height
  },
  floorContainer:{
    position: 'absolute',
    bottom: 100,
    left: 10,
    right: 0,
    padding: 5,
    backgroundColor:Colors.Iconwhite,
    width:90,
    borderRadius:20
  },
});

export default EventsComponent;
