import React, {useMemo, useRef, useState} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BottomSheet from '../screens/BottomSheet';
import RBSheet, {RBSheetProps} from 'react-native-raw-bottom-sheet';


interface ServicesProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Services: React.FC<ServicesProps> = ({navigation}) => {
  const phoneNumber = 9988776655;
  const refRBSheet = useRef<RBSheet | null>(null);

  const onPressHandler = () => {
    navigation.navigate('AboutUs');
  };

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheetButtonText, setBottomSheetButtonText] = useState('');
  const [bottomSheetDescription, setBottomSheetDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const showBottomSheet = (titleText: string, details: string, url: string) => {
    setBottomSheetButtonText(titleText);
    setBottomSheetDescription(details);
    setBottomSheetVisible(true);
    setImageUrl(url);
    refRBSheet.current?.open();
  };

  const hideBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={styles.profileCard}>
        <Image
          source={require('../assets/appImages/businessman.jpg')}
          style={{width: wp('14%'), height: hp('7%'), borderRadius: 40}}
          resizeMode="cover"
        />
        <View style={styles.profileContent}>
          <View style={styles.textContainer}>
            <Text style={{fontSize: 26, fontWeight: '500', color: '#fff'}}>
              Salem Amer Al-Badri
            </Text>
            <Text style={{color: '#fff'}}>Account details</Text>
          </View>

          <IconButton
            icon="greater-than"
            iconColor={'#fff'}
            size={18}
            onPress={onPressHandler}
            style={{justifyContent: 'flex-end'}}
          />
        </View>
      </View>
      {/* Services */}
      <View style={styles.servicesContainer}>
        {/* <Text style={{fontSize: 18, fontWeight: '800'}}>Services</Text> */}
        {/* Call */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
          <View style={styles.cardTextIcon}>
            <View style={styles.textStyle}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FAFAFA'}}>
                Call Gulf Mall
              </Text>
              <Text
                style={{fontSize: 13, paddingVertical: 8, color: '#FAFAFA'}}>
                You can call for mall services.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon source="phone" color={'#885024'} size={25} />
            </View>
          </View>
        </TouchableOpacity>
        {/* Wifi */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            showBottomSheet(
              'Wifi Information',
              'To enjoy our Free Wi-Fi service, connect to Gulf Mall Guest Wifi from the list of Wi-Fi networks. If you need any assistance, please visit the nearest Customer Help Desk.',
              '../assets/appImages/FreeWifi.jpg',
            );
          }}>
          <View style={styles.cardTextIcon}>
            <View style={styles.textStyle}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FAFAFA'}}>
                Wifi Facilities
              </Text>
              <Text
                style={{fontSize: 13, paddingVertical: 8, color: '#FAFAFA'}}>
                Wifi related queries.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon source="wifi" color={'#885024'} size={25} />
            </View>
          </View>
        </TouchableOpacity>
        {/* Events */}
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardTextIcon}>
            <View style={styles.textStyle}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FAFAFA'}}>
                Events
              </Text>
              <Text
                style={{fontSize: 13, paddingVertical: 8, color: '#FAFAFA'}}>
                Events dates and venue details.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon source="calendar" color={'#885024'} size={25} />
            </View>
          </View>
        </TouchableOpacity>
        {/* Notification */}
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardTextIcon}>
            <View style={styles.textStyle}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FAFAFA'}}>
                Notification
              </Text>
              <Text
                style={{fontSize: 13, paddingVertical: 8, color: '#FAFAFA'}}>
                Notififcations about offers and deals.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon source="bell" color={'#885024'} size={25} />
            </View>
          </View>
        </TouchableOpacity>
        {/* Reports */}
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardTextIcon}>
            <View style={styles.textStyle}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FAFAFA'}}>
                Reports
              </Text>
              <Text
                style={{fontSize: 13, paddingVertical: 8, color: '#FAFAFA'}}>
                Report related details.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon source="note-multiple" color={'#885024'} size={25} />
            </View>
          </View>
        </TouchableOpacity>

        {/* Information */}
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardTextIcon}>
            <View style={styles.InfoTextStyle}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FAFAFA'}}>
                Information
              </Text>
              <Text style={{fontSize: 13, paddingTop: 8, color: '#FAFAFA'}}>
                get information about the shops.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon source="information" color={'#885024'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('15%'),
          }}
          onPress={onPressHandler}>
          <Text style={{fontSize: 15, fontWeight: '500', color: '#fff'}}>
            About
          </Text>
          <Icon source="greater-than" color={'#fff'} size={13} />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('19%'),
          }}>
          <Text style={{fontSize: 15, fontWeight: '500', color: '#fff'}}>
            Charges
          </Text>
          <Icon source="greater-than" color={'#fff'} size={13} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('15%'),
          }}>
          <Text style={{fontSize: 14, color: '#fff'}}>Appv1.00</Text>
        </View>
      </View>
      <BottomSheet
        isVisible={bottomSheetVisible}
        onClose={hideBottomSheet}
        title={bottomSheetButtonText}
        description={bottomSheetDescription}
        ref={refRBSheet}
        // image={imageUrl}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center', // Center align items vertically
    backgroundColor: '#121212',
    height: hp('12%'),
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#404040',
  },
  profileContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  textContainer: {
    flex: 2,
  },
  servicesContainer: {
    backgroundColor: '#121212',
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.2,
    borderBottomColor: '#404040',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp('10%'),
  },
  cardTextIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    borderWidth: 0.5,
    height: hp('5.5%'),
    width: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  textStyle: {
    flexDirection: 'column',
    width: wp('75%'),
    // borderBottomWidth: 0.2,
    // borderBottomColor: '#404040',
    marginLeft: 15,
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  InfoTextStyle: {
    flexDirection: 'column',
    width: wp('74%'),
    marginLeft: 15,
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: hp('3%'),
  },
});
