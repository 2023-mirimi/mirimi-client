import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const meal = [
  {
    MLSV_YMD: "20230622",
    date: "목",
    DDISH_NM1:
      "곤드레밥&부추양념장<br/>\n북엇국<br/>상추치커리무침<br/>\n푸실리칠리볶음<br/>배추김치",
    DDISH_NM2:
      "현미밥<br/>순두부찌개<br/>상추치커리무침<br/>호박볶음<br/>배추김치<br/>수리취떡",
    DDISH_NM3:
      "추가밥<br/>양송이스프<br/>볶음김치<br/>웨지감사&소스<br/>상하이치킨버거<br/>에이드",
  },
  {
    MLSV_YMD: "20230623",
    date: "금",
    DDISH_NM1: "쌀밥<br/>쑥갓어묵국<br/>돈육장조림<br/>돌자반<br/>볶음김치",
    DDISH_NM2:
      "찹쌀밥<br/>반계탕<br/>오징어김치전<br/>두부까스<br/>석박지<br/>오이소박이<br/>식혜",
    DDISH_NM3: "",
  },
  {
    MLSV_YMD: "20230626",
    date: "월",
    DDISH_NM1:
      "추가밥<br/>치즈앤치즈핫도그<br/>배추김치<br/>씨리얼&우유<br/>두유",
    DDISH_NM2:
      "찹쌀밥<br/>김치찌개<br/>쫄면<br/>머위대들깨볶음<br/>통안심돈까스<br/>깍두기",
    DDISH_NM3:
      "추가밥<br/>짜장면<br/>오징어짬뽕국<br/>꿔바로우탕수육<br/>배추김치<br/>단무지<br/>메로나튜브",
  },
  {
    MLSV_YMD: "20230627",
    date: "화",
    DDISH_NM1:
      "추가밥<br/>만둣국<br/>진미채볶음<br/>동그랑땡&케찹<br/>배추김치",
    DDISH_NM2:
      "혼합잡곡밥<br/>얼큰콩나물국<br/>부추겉절이<br/>매콤오리주물럭<br/>해물파전<br/>깍두기<br/>마시는런요거트",
    DDISH_NM3:
      "쌀밥<br/>소고기무국<br/>갈비찜<br/>참나물무침<br/>어묵볶음<br/>배추김치",
  },
];

const renderMeal = ({ item }) => {
  // .replace(/\([0-9\.]+\)/g, ""));
  const mealInfo = item.DDISH_NM1.split("<br/>");
  const mealInfo1 = item.DDISH_NM2.split("<br/>");
  const mealInfo2 = item.DDISH_NM3.split("<br/>");

  let m1 = mealInfo.join(" / ");
  let m2 = mealInfo1.join(" / ");
  let m3 = mealInfo2.join(" / ");

  const dateString =
    item.MLSV_YMD.substr(4, 2) + "." + item.MLSV_YMD.substr(6, 2);

  const showTodayText = (MLSV_YMD) => {
    let todayDate = new Date().getDate();
    console.log(MLSV_YMD.substr(6, 7) + "오늘 : " + todayDate);
    console.log(MLSV_YMD.substr(6, 7) == todayDate);
    if (MLSV_YMD.substr(6, 7) == todayDate) {
      return "Today";
    } else {
      return "";
    }
  };

  return (
    <View style={styles.element}>
      <View style={styles.row}>
        <View style={styles.date}>
          <Text style={styles.weekday}>{item.date}</Text>
          <Text style={styles.day}>{dateString}</Text>
        </View>
        <View>
          <Text style={styles.today}>{showTodayText(item.MLSV_YMD)}</Text>
        </View>
      </View>
      <View style={styles.mealInfo}>
        <Text style={styles.mealName}>아침</Text>
        <Text style={styles.mealList}>
          {m1.split(" / ").map((item, index) => (
            <Text key={index}>
              {item}
              {index !== m1.split(" / ").length - 1 && (
                <Text style={styles.separator}> / </Text>
              )}
            </Text>
          ))}
        </Text>
        <Text style={styles.mealName}>점심</Text>
        <Text style={styles.mealList}>
          {m2.split(" / ").map((item, index) => (
            <Text key={index}>
              {item}
              {index !== m1.split(" / ").length - 1 && (
                <Text style={styles.separator}> / </Text>
              )}
            </Text>
          ))}
        </Text>
        <Text style={styles.mealName}>
          {mealInfo2.length == 1 ? "" : "저녁"}
        </Text>
        <Text style={styles.mealList}>
          {m3.split(" / ").map((item, index) => (
            <Text key={index}>
              {item}
              {index !== m1.split(" / ").length - 1 && (
                <Text style={styles.separator}> / </Text>
              )}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

const MealFlatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mealDiv}>
        <Text style={styles.mealTitle}>주간 급식</Text>
        <Text style={styles.more}>더보기</Text>
      </View>
      <FlatList
        horizontal={true}
        data={meal}
        renderItem={renderMeal}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MealFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // 양쪽 옆에 가려지는 불편함
  },

  separator: {
    color: "#e9e9e9", // 슬래시(/)의 색상을 변경하려면 여기에 원하는 스타일을 적용하세요
  },

  mealDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  mealInfo: {
    height: 100,
    background: "#FFFFFF",
    border: "1px solid #EDEDED",
    borderRadius: 16,
  },

  mealTitle: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 2,
    marginTop: 24,
    marginBottom: 24,
  },

  today: {
    fontSize: 14,
    fontWeight: 700,
    color: "#17E381",
    marginTop: 2,
    marginLeft: 7,
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
    height: 440,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EDEDED",
    padding: 16,
    borderRadius: 16,
    marginLeft: 4,
    marginRight: 4,
    shadowColor: "#EDEDED",
    shadowOffset: {
      width: -10,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
    marginRight: 3,
  },

  day: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    marginTop: 4,
    color: "#A7A7A7",
  },

  mealName: {
    fontSize: 14,
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
  },

  mealList: {
    flexShrink: 0,
    color: "#8A8A8A",
    fontSize: 14,
    gap: 0,
    lineHeight: 24,
  },

  body: {},

  //   mealInfo: {},
});
