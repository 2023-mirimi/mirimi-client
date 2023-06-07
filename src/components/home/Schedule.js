import React from "react";
import { View, Text, StyleSheet, FlatList, useState } from "react-native";
import { TextInput } from "react-native-gesture-handler";

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

// const [disable, setDisable] = useState(false);
const Item = ({ title, width }) => (
  <View
    style={{
      width: 60,
      height: 60,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      paddingTop: 30,
      borderColor: "#E9E9E9",
      borderWidth: 0.3,
    }}
  >
    {/* https://reactnative.dev/docs/handling-touches#touchables */}
    <TextInput editable={disable} selectTextOnFocus={disable} />
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
    marginLeft: 49,
    marginHorizontal: 16,
    borderRadius: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 2,
    marginTop: 24,
    marginBottom: 24,
  },
});
