import React from 'react';
import {View} from 'react-native';
import {RingPicker, RingPickerV4, RingPickerV5} from './src/components';
import RNRingPicker from './src/components/RNRingPicker/sample';

const data = [...Array(10).keys()].map((element, index) => ({
  id: index,
  label: element,
}));

function App() {
  const handleOnPress = (element) => {
    console.log('handleOnPress', element);
  };

  const handleOnMomentumScrollEnd = (element) => {
    console.log('handleOnMomentumScrollEnd', element);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <RNRingPicker /> */}
      <RingPickerV5
        data={data}
        onPress={handleOnPress}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
        size={300}
        maxToRenderPerBatch={7}
      />
    </View>
  );
}

export default App;
