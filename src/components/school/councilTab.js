import { ScrollView, StyleSheet, View } from "react-native";
import CouncilCard from "./councilCard";
import data from "./data.json";

const CouncilTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.cardContainer}>
          {data.map((a) => (
            <CouncilCard content={a.content} date={a.date} src={a.src} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  scroll: {
    marginTop: 23,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default CouncilTab;
