import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const MealFlatlist = () => {
  const [meals, setMeals] = useState([]);

  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1; // 0월 ~ 11월
  let fromdate = now.getDate(); // 오늘
  // 오늘부터 모레까지의 급식 -> 3일치
  let todate = now.getDate() + 10; // 모레

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const KEY = "c39707fb3d35425aac169b2392b44921";
        const TYPE = "json";
        const CODE = "B10";
        const ATBT = "7010569";
        const MLSVFROM = `${year}${month
          .toString()
          .padStart(2, "0")}${fromdate}`;
        const MLSVTO = `${year}${month.toString().padStart(2, "0")}${todate}`;
        const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?key=${KEY}&type=${TYPE}&&ATPT_OFCDC_SC_CODE=${CODE}&SD_SCHUL_CODE=${ATBT}&MLSV_FROM_YMD=${MLSVFROM}&MLSV_TO_YMD=${MLSVTO}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(JSON.stringify(data));
        const mealsData = data.mealServiceDietInfo[1].row;
        setMeals(mealsData);
        console.log(url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeals();
  }, []);

  const parseMealsByType = (type) => {
    return meals.filter((meal) => meal.MMEAL_SC_NM === type);
  };

  const renderMeal = ({ item }) => {
    const mealDate = new Date(
      parseInt(item.MLSV_YMD.slice(0, 4)),
      parseInt(item.MLSV_YMD.slice(4, 6)) - 1,
      parseInt(item.MLSV_YMD.slice(6, 8))
    );
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const formattedDate = `${weekdays[mealDate.getDay()]} ${
      mealDate.getMonth() + 1
    }.${mealDate.getDate()}`;

    return (
      <View style={styles.element}>
        <View style={styles.row}>
          <View style={styles.date}>
            <Text style={styles.weekday}>{weekdays[mealDate.getDay()]}</Text>
            <Text style={styles.day}>
              {mealDate.getMonth() + 1}.{mealDate.getDate()}
            </Text>
          </View>
          <View>
            <Text style={styles.body}>{item.isToday}</Text>
          </View>
        </View>
        <View style={styles.mealInfo}>
          <Text>아침</Text>
          <Text>{item.DDISH_NM}</Text>
          <Text>점심</Text>
          <Text>{item.DDISH_NM}</Text>
          <Text>저녁</Text>
          <Text>{item.DDISH_NM}</Text>
        </View>
      </View>
    );
  };
  const mealsString = JSON.stringify(meals);

  return (
    <View style={styles.container}>
      <View style={styles.mealDiv}>
        <Text style={styles.mealTitle}>주간 급식</Text>
        <Text style={styles.more}>더보기</Text>
      </View>
      <FlatList
        horizontal={true}
        data={parseMealsByType("중식")}
        renderItem={renderMeal}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <FlatList
        data={parseMealsByType("조식")}
        renderItem={renderMeal}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text>중식</Text>
      <FlatList
        data={parseMealsByType("중식")}
        renderItem={renderMeal}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text>석식</Text>
      <FlatList
        data={parseMealsByType("석식")}
        renderItem={renderMeal}
        keyExtractor={(item, index) => index.toString()}
      /> */}
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

  date: {
    display: "flex",
    flexDirection: "row",
  },
  weekday: {
    fontSize: 20,
    fontWeight: 500,
  },

  day: {
    display: "flex",
    flexDirection: "row",
  },

  body: {},

  //   mealInfo: {},
});
