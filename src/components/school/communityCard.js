import { StyleSheet, Text, View } from 'react-native';
// import council from '../../assets/school/council.png';
// import image from '../../assets/school/image.png';
// import chat from '../../assets/school/chat.png';
// import like from '../../assets/school/like.png';
import { useNavigation } from '@react-navigation/native';

const CommunityCard = () => {
	const navigation = useNavigation()
	
  return (
    <View style={styles.container}>
      <Text style={styles.tag}>일상</Text>
      <Text style={styles.title}>제목?ㅇ제목/?????제목?ㅇ제목/?????제목?ㅇ제목/?????제목?ㅇ제목/?????제목?ㅇ제목/?????</Text>
      <View style={styles.info_container}>
        <Text style={styles.text}>작성인</Text>
        <Text style={styles.line}>|</Text>
        <Text style={styles.text}>작성 날짜</Text>
        <Text style={styles.line}>|</Text>
        <Text style={styles.text}>조회수</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 136,
    padding: 20,
		borderWidth: 1,
		borderColor: '#E9E9E9',
	},
  tag: {
    fontSize: 14,
    fontWeight: 700,
    color: "#5A5A5A"
  },
  title: {
    fontSize: 16,
    fontWeight: 500
  },
  info_container: {
    width: 171,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: "#8A8A8A"
  },
  line: {
    fontSize: 14,
    fontWeight: 400,
    color: "#F2F2F2"
  }
});

export default (CommunityCard);