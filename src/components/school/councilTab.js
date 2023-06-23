import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import CouncilCard from "./councilCard";
import data from "./data.js";
import { Ionicons } from "@expo/vector-icons";

const CouncilTab = () => {
  const [showTip, setTip] = useState(true);

  const handleCloseTooltip = () => {
    setTip(false);
    setTimeout(() => {
      setTip(true);
    }, 60000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTip(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {showTip && (
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>프로필을 눌러보세요!</Text>
            <TouchableOpacity onPress={handleCloseTooltip}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.cardContainer}>
          {data.map((a, idx) => (
            <CouncilCard  key={idx} content={a.content} date={a.date} src={a.src} />
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
  tooltip: {
    position: "absolute",
    backgroundColor: "rgba(23, 227, 129, 1)",
    padding: 6,
    paddingLeft: 10,
    borderRadius: 4,
    top: 0,
    left: 40,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    zIndex: 10000,
  },
  tooltipText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  }
});

export default CouncilTab;
