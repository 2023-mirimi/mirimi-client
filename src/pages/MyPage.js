import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import profile from '../assets/mypage/profile.png';
import settings from '../assets/mypage/settings.png';
import move from '../assets/mypage/move.png';
import cup from '../assets/icons/cup.png';
import chat from '../assets/icons/chat.png';

import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';

const MyPage = () => {
	const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Header name={"마이페이지"}/>
      <View style={styles.body}>
        <View style={styles.box}>
        <View style={styles.textBox}>
            <Image source={profile}/>
            <View style={styles.infoBox}>
                <Text style={styles.grade}>학년 반 번호</Text>
                <Text style={styles.name}>이름</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={settings}/>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.touchBox} onPress={() => navigation.navigate('공모전')}>
            <View style={styles.touchBoxInfo}>
              <Image source={cup}/>
              <Text style={styles.text}>공모전</Text>
            </View>
            <Image source={move}/>
          </TouchableOpacity>
          <View style={styles.hr}/>
          <TouchableOpacity style={styles.touchBox} onPress={() => navigation.navigate('공모전')}>
            <View style={styles.touchBoxInfo}>
              <Image source={chat}/>
              <Text style={styles.text}>커뮤니티</Text>
            </View>
            <Image source={move}/>
          </TouchableOpacity>
        </View>
        <View style={styles.box3}>
          <TouchableOpacity style={styles.touchBox} onPress={() => navigation.navigate('BookBarCode')}>
            <View style={styles.touchBoxInfo}>
              <Text style={styles.text}>도서대출증</Text>
            </View>
            <Image source={move}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const MyPageNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyPageScreen" component={MyPage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    flexDirection: 'column',
    // gap: 20,
    backgroundColor: '#fff',
    height: 812,
    // backgroundColor: 'rgba(250, 250, 250, 1)',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 16,
    // paddingRight: 16
  },
  body: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#FAFAFA', //
  },
  box: {
    marginTop: 24,
    width: 343,
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
  textBox: {
      flexDirection: 'row',
      alignItems: 'center',
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
    width: 343,
    // height: 144,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 28,
    borderRadius: 16,
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 32,
    paddingLeft: 32,
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
  touchBox: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchBoxInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 500
  },
  hr: {
    width: 296,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(233, 233, 233, 1)'
  },
  box3: {
    width: 343,
    // height: 144,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 28,
    borderRadius: 16,
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 32,
    paddingLeft: 32,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    marginBottom: 269,
  }
});

export default MyPage;