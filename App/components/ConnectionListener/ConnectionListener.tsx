import * as React from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-paper';
import Text from '../Text';


const ConnectionListener = () => {
  // const [t] = useTranslation();
  const [isConnected, setIsConnected] = React.useState<Boolean | null>(true);
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (isConnected) {
    return null;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.inner}>
        <Icon source="wifi-slash" size={16} color="white" />
        <View style={styles.text}>
          <Text size={14} color="white">
            {/* {t('noconnection')} */}
            'noconnection'
          </Text>
        </View>
      </View>
      <StatusBar  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b00',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 9999999,
  },
  inner: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingStart: 8,
  },
});

export default ConnectionListener;
