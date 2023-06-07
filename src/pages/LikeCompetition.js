import { StyleSheet, View, Image, Text } from 'react-native';
import CompetitionCard from '../components/competition/competitionCard'
import { ScrollView } from 'react-native-gesture-handler';

const LikeCompetition = () => {
  return (
    <View style={styles.container}>
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

export default LikeCompetition;