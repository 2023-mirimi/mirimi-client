import { StyleSheet, View, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import left from '../../assets/school/left.png';
import right from '../../assets/school/right.png';
import data from '../../assets/school/academicCalendar';

const CalendarTab = () => {
  

  const handleDayClick = (day) => {
    data.map((d) => {
      if (day.dateString === d.date)
      console.log(d.title[0])
    })
    
  }

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          todayTextColor: 'black',
          dotColor: 'red',
          selectedDotColor: 'red',
          textDayFontSize: 20,
          textDayFontWeight: 'bold',
          textMonthFontSize: 20,
          textMonthFontWeight: 'bold',
          textSectionTitleColor: 'rgba(138, 138, 138, 1)',
        }}
        onDayPress={(day) => handleDayClick(day)}
        monthFormat={'M월'}
        hideExtraDays={true}
        renderArrow={(direction) => direction === "left" ?
        <Image name="left" size={20} source={left}/> : <Image name="right" size={20} source={right} />}
      />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  calendar: {
    marginTop: 24,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 20
  }
});

export default CalendarTab;