import React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";

const meal = [
    {
      "MLSV_YMD": "20230607",
      "date" : "수",
      "DDISH_NM1": "계란볶음밥*  (1.2.5.6.10.13.)<br/>마라탕  (1.2.5.6.12.13.16.17.)<br/>짜사이무침  <br/>꿔바로우탕수육  (1.5.6.10.12.13.)<br/>얼려먹는주스(피치팝)  (11.13.)<br/>양상추샐러드*  (5.12.13.)",
      "DDISH_NM2": "찹쌀밥  <br/>찹쌀도넛  (1.2.5.6.)<br/>오징어무국  (17.)<br/>스크램블에그  (1.)<br/>갈비김치찜  (5.6.9.10.13.)<br/>깍두기  (9.)",
      "DDISH_NM3" : ""
    },
    {
        "MLSV_YMD": "20230608",
        "date" : "목",
        "DDISH_NM1": "찹쌀밥  <br/>달걀북어국.  (1.13.)<br/>안동찜닭(중)  (1.5.6.8.13.15.18.)<br/>오이무침  (5.6.13.)<br/>배추김치  (9.)",
        "DDISH_NM2": "추가밥(쌀밥)  <br/>볶음김치  (5.9.12.13.)<br/>씨리얼&우유  (2.5.6.13.)<br/>핫도그빵  (1.2.5.6.10.12.13.15.16.)<br/>청포도*  ",
      "DDISH_NM3": "흑미밥  <br/>차돌된장찌개  (5.6.13.16.)<br/>상추겉절이  (13.)<br/>계란말이  (1.5.)<br/>통마늘삼겹오븐구이  (10.)<br/>배추김치  (9.)"
    },
    {
        "MLSV_YMD": "20230609",
        "date" : "금",
        "DDISH_NM1": "추가밥(쌀밥)  <br/>낙지김치죽  (9.)<br/>미역장국  (5.6.7.13.18.)<br/>사각햄구이전  (1.2.5.6.10.15.)<br/>백김치  (9.)<br/>리치에이드  ",
        "DDISH_NM2": "찹쌀밥  <br/>감자수제비국(매콤)  (5.6.9.13.)<br/>함박스테이크  (1.2.5.6.10.12.13.)<br/>생깻잎지  (5.6.13.)<br/>건파래볶음  (5.13.)<br/>깍두기  (9.)<br/>요거트(소와나무생크림)  (2.)",
        "DDISH_NM3": "짜장덮밥  (5.6.10.13.16.)<br/>계란파국  (1.9.13.)<br/>유린기  (1.5.6.13.15.)<br/>단무지  <br/>시리얼과일샐러드(S)  (1.2.5.6.12.13.)<br/>골라먹는짜요짜요(3가지맛)  (2.)"
    },
    {
        "MLSV_YMD": "20230612",
        "date" : "월",
      "DDISH_NM1": "찹쌀밥  <br/>콩나물국(매콤)  (5.13.)<br/>오이지무침(J)  (13.)<br/>한입돈까스  (1.5.6.10.12.13.16.)<br/>배추김치  (9.)",
      "DDISH_NM2": "찹쌀밥  <br/>육개장2  (1.16.)<br/>도라지무침  (5.6.13.)<br/>동그랑땡&케찹  (1.2.5.6.10.12.15.16.)<br/>순살가자미튀김  (5.6.12.)<br/>깍두기  (9.)",
      "DDISH_NM3": "간장계란밥  (1.2.5.6.)<br/>돼지고기짜글이(J)  (5.6.10.13.)<br/>볶음김치  (5.9.12.13.)<br/>멘츠까스  (1.5.6.10.12.13.16.)<br/>망고푸딩  <br/>도시락김  (13.)"
    },
  ]
  
const renderMeal = ({item}) => {
    
    // .replace(/\([0-9\.]+\)/g, ""));
    const mealInfo = item.DDISH_NM1.split("<br/>");
    const mealInfo1 = item.DDISH_NM2.split("<br/>");
    const mealInfo2 = item.DDISH_NM3.split("<br/>");

    const dateString = item.MLSV_YMD.substr(4, 2) + '.' + item.MLSV_YMD.substr(6, 2);

    

    return (
        <View style={styles.element}>
        <View style={styles.row}>
          <View style={styles.date}>
            <Text style={styles.weekday}>
                {item.date}
                </Text>
            <Text style={styles.day}>
                {dateString}
            </Text>
          </View>
          <View>
            <Text style={styles.body}>
                {/* {item.isToday} */}
                </Text>
          </View>
        </View>
        <View style={styles.mealInfo}>
            <Text style={styles.mealName}>아침</Text>
            {mealInfo.map((info, index) => (
            <Text style={styles.mealList} key={index}>{info}</Text>
            ))}
            <Text style={styles.mealName}>점심</Text>
            {mealInfo1.map((info, index) => (
            <Text style={styles.mealList} key={index}>{info}</Text>
            ))}
            <Text style={styles.mealName}>저녁</Text>
            {mealInfo2.map((info, index) => (
            <Text style={styles.mealList} key={index}>{info}</Text>
            ))}
        </View>
      </View>
    )
}

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
  
    mealDiv: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
  
    mealInfo: {
      height: 21,
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
      height: 450,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#EDEDED",
      padding: 16,
      borderRadius: 16s,
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
      fontSize: 26,
      fontWeight: 500,
      marginRight: 3,
    },
  
    day: {
      display: "flex",
      flexDirection: "row",
      marginTop: 8,
      color: '#A7A7A7',
    },

    mealName: {
        fontSize: 16,
        fontWeight: 500,
        paddingTop: 10,
        paddingBottom: 20,
    },

    mealList: {
        color: '#8A8A8A',
        fontSize: 14,
        gap: 5,
    },
  
    body: {},
  
    //   mealInfo: {},
  });