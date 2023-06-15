import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./ScheduleItem";

const Schedule = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>시간표</Text>
      <View style={style.row}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      <View style={style.row}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      <View style={style.row}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      <View style={style.row}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      <View style={style.row}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      <View style={style.row}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
};

export default Schedule;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginVertical: 8,
    marginLeft: 16,
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
