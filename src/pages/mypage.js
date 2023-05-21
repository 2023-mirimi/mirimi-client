import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import profile from '../assets/profile.png';
import settings from '../assets/settings.png';
import move from '../assets/move.png';
import cup from '../assets/cup.png';
import chat from '../assets/chat.png';

const MyPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.textBox}>
            <Image source={profile}/>
            <View style={styles.infoBox}>
                <Text style={styles.grade}>학년 반 번호</Text>
                <Text style={styles.name}>이름</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('프로필 설정')}>
            <Image source={settings}/>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <View style={styles.contentBox}>
            <TouchableOpacity style={styles.competition} onPress={() => navigation.navigate('공모전')}>
              <View style={styles.textBox}>
                <Image source={cup}/>
                <Text style={styles.text}>공모전</Text>
              </View>
                <Image source={move}/>
            </TouchableOpacity>
            <View style={styles.hr}/>
            <TouchableOpacity style={styles.community} onPress={() => navigation.navigate('커뮤니티')}>
              <View style={styles.textBox}>
                <Image source={chat}/>
                <Text style={styles.text}>커뮤니티</Text>
              </View>
                <Image source={move}/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.box3} onPress={() => navigation.navigate('도서대출증')}>
            <Text style={styles.text2}>도서대출증</Text>
            <Image source={move}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  box1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: -200,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(233, 233, 233, 1)',
    borderRadius: 16
  },
  textBox: {
    flexDirection: 'row',
  },
  infoBox: {
    marginLeft: 16
  }, 
  grade: {
    fontSize: 12,
    color: 'rgba(138, 138, 138, 1)'
  },
  name: {
    fontSize: 20,
    fontWeight: 500
  },
  box2: {
    width: '100%',
    height: 144,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(233, 233, 233, 1)',
    borderRadius: 16
  },
  contentBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  hr: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(233, 233, 233, 1)'
  },
  competition: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  community: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  box3: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(233, 233, 233, 1)',
    borderRadius: 16
  },
  text: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 500
  },
  text2: {
    fontSize: 16,
    fontWeight: 500
  }
});

export default MyPage;