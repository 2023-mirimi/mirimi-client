import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const competitionCard = () => {
  return (
    <View style={styles.container}>
      <Header name={"커뮤니티"} />
      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryTxt}>전체</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryTxt}>일상</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryTxt}>취업</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryTxt}>학교</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryTxt}>공모전</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default competitionCard;

const styles = StyleSheet.create({
  container: {
    height: 812,
    backgroundColor: "#fff",
  },
  header: {
    width: 375,
    height: 44,
    marginTop: 44,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  category: {
    width: 375,
    height: 44,
    gap: 40,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  categoryTxt: {
    fontSize: 18,
  },
});
