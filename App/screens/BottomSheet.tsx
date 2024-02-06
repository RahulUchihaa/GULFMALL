import React, { forwardRef } from 'react';
import { Image, ImageProps, ScrollView, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface ExampleProps {
  isVisible: boolean;
  onClose: () => void;
  title:string;
  description:string;
  // image:ImageProps
  ref:any;
  
}

const BottomSheet: React.FC<ExampleProps> = forwardRef(({title,description},ref) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RBSheet
        // @ts-ignore
        ref={ref}
        closeOnDragDown={true}
        closeOnPressBack={true}
        height={350}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <ScrollView contentContainerStyle={{paddingHorizontal:10,flexDirection:'column'}}>
          <Image source={require('../assets/appImages/FreeWifi.jpg')} style={{height:hp('20%'),width:wp('95%')}} resizeMode='cover'/>
          {/* <Text style={{textAlign:'center',fontSize:18,color:'#121212'}}>{title}</Text> */}
          <Text style={{fontSize:15,color:'#000',textAlign:'center'}}>{description}</Text>
        </ScrollView>
      </RBSheet>
    </View>
  );
});



export default BottomSheet;
