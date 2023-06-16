import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import left from '../../assets/school/left.png';
import right from '../../assets/school/right.png';
import data from '../../assets/school/academicCalendar';
import CalendarArticle from './calendarArticle';

const CalendarTab = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayClick = (day) => {
    setSelectedDate(day.dateString);
    setTitleIdx(0);
  };

  const renderCalendarArticle = () => {
    const selectedData = data.find((d) => d.date === selectedDate);
    if (selectedData) {
      return selectedData.title.map((title, idx) => (
        <CalendarArticle key={idx} date={selectedData.date} title={title} />
      ));
    }
    return null;
  };

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
        onDayPress={handleDayClick}
        monthFormat={'M월'}
        hideExtraDays={true}
        renderArrow={(direction) =>
          direction === 'left' ? (
            <Image name="left" size={20} source={left} />
          ) : (
            <Image name="right" size={20} source={right} />
          )
        }
      />
      {renderCalendarArticle()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  calendar: {
    width: 343,
    marginTop: 24,
    marginBottom: 16,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 20,
  },
});

export default CalendarTab;