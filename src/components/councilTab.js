import { ScrollView, StyleSheet, View } from 'react-native';
import CouncilCard from '../components/councilCard';

const CouncilTab = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <View style={styles.cardContainer}>
                <CouncilCard/>
                <CouncilCard/>
                <CouncilCard/>
                <CouncilCard/>
                <CouncilCard/>
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
        marginTop: 23
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
});

export default CouncilTab;