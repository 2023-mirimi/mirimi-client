import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// 급식 API가 들어갈 자리
const DATA = [
  {
    id: 1,
    day: "월",
    month: 4,
    date: 17,
    isToday: true,
    bodys: "왕감자 / 유부장국 / 돌바잔 / 미트볼 / 배추김치",
  },
  {
    id: 2,
    day: "화",
    month: 4,
    date: 18,
    isToday: true,
    bodys: "왕감자 / 유부장국 / 돌바잔 / 미트볼 / 배추김치",
  },
  {
    id: 3,
    day: "수",
    month: 4,
    date: 19,
    isToday: true,
    bodys: "왕감자 / 유부장국 / 돌바잔 / 미트볼 / 배추김치",
  },
  {
    id: 4,
    day: "목",
    month: 4,
    date: 20,
    isToday: true,
    bodys: "왕감자 / 유부장국 / 돌바잔 / 미트볼 / 배추김치",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.element}>
      <View style={styles.row}>
        <View>
          <Text style={styles.day}>{item.day}</Text>
        </View>
        <View style={styles.date}>
          <Text>{item.month}</Text>
          <Text>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.body}>{item.isToday}</Text>
        </View>
      </View>
      <View style={styles.mealInfo}>
        <Text>아침</Text>
        <Text>{item.bodys}</Text>
        <Text>점심</Text>
        <Text>{item.bodys}</Text>
        <Text>저녁</Text>
        <Text>{item.bodys}</Text>
      </View>
    </View>
  );
};

const MealFlatlist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mealDiv}>
        <Text style={styles.mealTitle}>주간 급식</Text>
        <Text style={styles.more}>더보기</Text>
      </View>
      <FlatList
        horizontal={true}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // 양쪽 옆에 가려지는 불편함
  },

  mealDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  mealTitle: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 2,
    marginTop: 24,
    marginBottom: 24,
  },

  more: {
    color: "#6A6A6A",
    width: 62,
    height: 24,
    textAlign: "center",
    paddingTop: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ECECEC",
    borderRadius: 11.5,
  },

  element: {
    display: "flex",
    width: 185,
    height: 298,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EDEDED",
    padding: 16,
    borderRadius: 16,
    marginLeft: 4,
    marginRight: 4,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },

  day: {
    fontSize: 20,
    fontWeight: 500,
  },

  date: {
    display: "flex",
    flexDirection: "row",
  },

  body: {},

  //   mealInfo: {},
});
