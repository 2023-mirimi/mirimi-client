import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {  WithLocalSvg } from 'react-native-svg';
import DropDownPicker from 'react-native-dropdown-picker';
import map1 from '../../assets/school/map1.svg';
import map2 from '../../assets/school/map2.svg';
import map3 from '../../assets/school/map3.svg';
import map4 from '../../assets/school/map4.svg';
import map5 from '../../assets/school/map5.svg';
import map6 from '../../assets/school/map6.svg';
import map7 from '../../assets/school/map7.svg';
import map8 from '../../assets/school/map8.svg';

const MapTab = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({label: '본관 1층', value: '1'});
  const [items, setItems] = useState([
     { label: '본관 1층', value: '1' },
     { label: '본관 2층', value: '2' },
     { label: '본관 3층', value: '3' },
     { label: '본관 4층', value: '4' },
     { label: '별관 지하 1층', value: '5' },
     { label: '별관 지하 2층', value: '6' },
     { label: '별관 1층', value: '7' },
     { label: '별관 2층', value: '8' },
  ]);
  const [currentValue, setCurrentValue] = useState(1);

  const onChange = (value, index) => {
    switch(value) {
      case '1': setCurrentValue(1); break;
      case '2': setCurrentValue(2); break;
      case '3': setCurrentValue(3); break;
      case '4': setCurrentValue(4); break;
      case '5': setCurrentValue(5); break;
      case '6': setCurrentValue(6); break;
      case '7': setCurrentValue(7); break;
      case '8': setCurrentValue(8); break;
      default: setCurrentValue(1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.dropdown_container}>
        <DropDownPicker
          open={open}
          value={values}
          items={items}
          placeholder="본관 1층"
          setOpen={setOpen}
          setValue={setValues}
          setItems={setItems}
          maxHeight={400}
          onChangeValue={onChange}
          dropDownMaxHeight={300}
          listItemContainerStyle={styles.dropdown}
        />
      </View>
      {currentValue === 1 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map1}></WithLocalSvg>
        </View>
      )}
      {currentValue === 2 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map2}></WithLocalSvg>
        </View>
      )}
      {currentValue === 3 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map3}></WithLocalSvg>
        </View>
      )}
      {currentValue === 4 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map4}></WithLocalSvg>
        </View>
      )}
      {currentValue === 5 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map5}></WithLocalSvg>
        </View>
      )}
      {currentValue === 6 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map6}></WithLocalSvg>
        </View>
      )}
      {currentValue === 7 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map7}></WithLocalSvg>
        </View>
      )}
      {currentValue === 8 && (
        <View>
          <WithLocalSvg width={350} height={500} asset={map8}></WithLocalSvg>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  dropdown_container: {
    marginTop: 24,
    zIndex: 1000
  },
  dropdown: {
    backgroundColor: '#fafafa'
  }
});

export default MapTab;