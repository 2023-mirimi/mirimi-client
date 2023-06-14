import { StyleSheet, View } from 'react-native';
import CommunityCard from '../components/school/communityCard';
import { ScrollView } from 'react-native';

const LikeCommunity = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.cardContainer}>
          <CommunityCard/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40,
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

export default LikeCommunity;