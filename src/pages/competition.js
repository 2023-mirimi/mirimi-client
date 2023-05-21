import { StyleSheet, View, Image, Text } from 'react-native';
import CompetitionCard from '../components/competitionCard'
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import controls from '../assets/controls.png';

const Competition = () => {
  const [country, setCountry] = useState('Unknown');
  const picker = <Text><Image source={controls}/>인기순</Text>;

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label={picker} value="Unknown" />
        <Picker.Item label="최신순" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
      </Picker>
      <ScrollView style={styles.scroll}>
        <View style={styles.cardContainer}>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
          <CompetitionCard/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  scroll: {
    marginTop: 40
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
});

export default Competition;