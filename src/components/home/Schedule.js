import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DATA = [
  {
    title: 1,
  },
  {
    title: 2,
  },
  {
    title: 3,
  },
  {
    title: 4,
  },
  {
    title: 5,
  },
  {
    title: 6,
  },
  {
    title: 7,
  },
  {
    title: 8,
  },
  {
    title: 9,
  },
  {
    title: 10,
  },
  {
    title: 11,
  },
  {
    title: 12,
  },
  {
    title: 13,
  },
  {
    title: 14,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
  {
    title: 15,
  },
];

const Item = ({ title, width }) => (
  <View
    style={{
      width: 70,
      height: 70,
      backgroundColor: "#f9c2ff",
      alignItems: "center",
      paddingTop: 30,
      borderColor: "#E9E9E9",
      borderWidth: 1,
    }}
  >
    <Text style={{ color: "black", fontSize: 14 }}>{title}</Text>
  </View>
);

const Schedule = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>주간 시간표</Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item, index) => index}
          numColumns={5}
        />
      </View>
    </View>
  );
};

export default Schedule;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 2,
    marginTop: 24,
    marginBottom: 24,
  },
});
