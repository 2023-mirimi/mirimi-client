import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// import Tooltip from "react-native-walkthrough-tooltip";
import Item from "./ScheduleItem";

const Schedule = () => {
  const [showTip, setTip] = useState(false);
  return (
    <View style={style.container}>
      <Text style={style.title}>시간표</Text>
      {/* <Tooltip
        isVisible={showTip}
        content={
          <View>
            <Text>꾹 눌러서 수정하기</Text>
          </View>
        }
        placement="top"
        onClose={() => setTip(false)}
        useInteractionManager={true}
      ></Tooltip> */}
      <View style={style.textRows}>
        <Text style={style.day}>월</Text>
        <Text style={style.day}>화</Text>
        <Text style={style.day}>수</Text>
        <Text style={style.day}>목</Text>
        <Text style={style.day}>금</Text>
      </View>
      <View style={style.rowContainer}>
        <View style={style.row2}>
          <Text style={style.num}>1</Text>
          <Item id="1" />
          <Item id="2" />
          <Item id="3" />
          <Item id="4" />
          <Item style={style.rightTop} id="5" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>2</Text>
          <Item id="6" />
          <Item id="7" />
          <Item id="8" />
          <Item id="9" />
          <Item id="10" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>3</Text>
          <Item id="11" />
          <Item id="12" />
          <Item id="13" />
          <Item id="14" />
          <Item id="15" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>4</Text>
          <Item id="16" />
          <Item id="17" />
          <Item id="18" />
          <Item id="19" />
          <Item id="20" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>5</Text>
          <Item id="21" />
          <Item id="22" />
          <Item id="23" />
          <Item id="24" />
          <Item id="25" />
        </View>
        <View style={style.row1Lunch}>
          <Text style={style.num}></Text>
          <Text style={style.lunch}>점심시간</Text>
        </View>
        <View style={style.row}>
          <Text style={style.num}>6</Text>
          <Item id="26" />
          <Item id="27" />
          <Item id="28" />
          <Item id="29" />
          <Item id="30" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>7</Text>
          <Item id="31" />
          <Item id="32" />
          <Item id="33" />
          <Item id="34" />
          <Item id="35" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>8</Text>
          <Item id="36" />
          <Item id="37" />
          <Item id="38" />
          <Item id="39" />
          <Item id="40" />
        </View>
        <View style={style.row}>
          <Text style={style.num}>9</Text>
          <Item id="41" />
          <Item id="42" />
          <Item id="43" />
          <Item id="44" />
          <Item id="45" />
        </View>
        <View style={style.row1}>
          <Text style={style.num}>10</Text>
          <Item id="46" />
          <Item id="47" />
          <Item id="48" />
          <Item id="49" />
          <Item id="50" />
        </View>
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
    marginHorizontal: 16,
  },

  rowContainer: {
    marginLeft: 16,
  },

  textRows: {
    flexDirection: "row",
    marginLeft: 59,
    marginBottom: 16,
    gap: 50,
  },

  day: {
    fontSize: 15,
    fontWeight: 500,
  },

  row: {
    flexDirection: "row",
  },

  row1: {
    flexDirection: "row",
    marginLeft: -6,
  },

  row2: {
    flexDirection: "row",
    marginLeft: 2,
  },

  row1Lunch: {
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 2,
    height: 61,
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    paddingLeft: 113,
  },

  lunch: {
    fontSize: 12,
    color: "#8A8A8A",
  },

  num: {
    fontSize: 14,
    color: "#8A8A8A",
    marginRight: 16,
    marginTop: 22,
  },

  title: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 2,
    marginTop: 24,
    marginBottom: 24,
  },
});
