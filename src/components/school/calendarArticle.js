import { StyleSheet, View, Text } from "react-native";

const CalendarArticle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.color}/>
      <View style={styles.text_container}>
        <Text style={styles.date}>{props.format}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 70,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(236, 236, 236, 1)'
  },
  color: {
    width: 10,
    height: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'rgba(23, 227, 129, 1)'
  },
  text_container: {
    display: "flex",
    marginLeft: 22,
    marginTop: 8
  },
  date: {
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(159, 159, 159, 1)'
  },
  title: {
    fontSize: 20,
    fontWeight: 500
  }
});

export default CalendarArticle;