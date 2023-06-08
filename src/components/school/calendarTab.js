import { StyleSheet, View, Image } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import left from '../../assets/school/left.png';
import right from '../../assets/school/right.png';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const CalendarTab = () => { 

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
        onDayPress={(day) => {console.log('selected day', day)}}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        monthFormat={'M월'}
        hideExtraDays={true}
        onMonthChange={(month) => {console.log('month changed', month)}}
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