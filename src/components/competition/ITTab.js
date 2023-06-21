import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import filledHeart from "../../assets/competition/filledHeart.png";
import emptyHeart from "../../assets/competition/emptyHeart.png";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
  {
    organ: "미림마이스터고",
    title: "미니멘토",
    comment: "졸업생 선배님들과 프로젝트하는 프로젝트",
    tag: ["NEW", "현재 1기 진행중"],
    day: "",
    count: "진행중",
  },
  {
    organ: "미림마이스터고",
    title: "창아경",
    comment: "창의아이디어경진대회",
    tag: ["교내 공모전", "높은 경쟁률"],
    day: "",
    count: "진행중",
  },
];

const Item = ({ organ, title, comment, tag, day, count, src }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleImageClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: src }} style={styles.profile} />
        <View>
          <Text style={styles.hostName}>{organ}</Text>
          <Text style={styles.name}>{title}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.info}>{comment}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>{tag[0]}</Text>
          <Text style={styles.tag}>{tag[1]}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.dDayContainer}>
          <Text style={styles.text}>{day}</Text>
          <Text style={styles.dDay}>{count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleImageClick}>
          <Image source={isFilled ? filledHeart : emptyHeart} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ITTab = () => {
  return (
    <View style={styles.wholecontainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            organ={item.organ}
            title={item.title}
            comment={item.comment}
            tag={item.tag}
            day={item.day}
            count={item.count}
            src={item.src}
          />
        )}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wholecontainer: {
    flex: 1,
    marginLeft: 7,
    backgroundColor: "#fff",
  },

  box: {
    width: 190,
    marginLeft: -40,
    marginTop: 10,
  },
  container: {
    justifyContent: "space-between",
    width: 168,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: "rgba(221, 221, 221, 1)",
    borderRadius: 14,
    backgroundColor: "#FAFAFA",
  },
  header: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginLeft: 23,
    marginTop: 20,
    marginRight: 10,
  },
  profile: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(214, 214, 214, 1)",
    borderRadius: 13,
  },
  hostName: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgba(138, 138, 138, 1)",
  },
  name: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 700,
  },
  info: {
    width: 150,
    marginTop: 8,
    fontSize: 12,
    fontWeight: 400,
    marginLeft: 30,
    color: "rgba(90, 90, 90, 1)",
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 20,
  },
  tag: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginLeft: 6,
    backgroundColor: "rgba(23, 227, 129, 0.15)",
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 400,
  },
  bottom: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: -10,
  },
  dDayContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "left",
    marginLeft: 12,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
  },
  dDay: {
    paddingLeft: 4,
    fontSize: 20,
    fontWeight: 500,
  },
  button: {
    flex: 1,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(233, 233, 233, 1)",
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
});

export default ITTab;
