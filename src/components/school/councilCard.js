import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import council from '../../assets/school/council.png';
import image from '../../assets/school/image.png';
import chat from '../../assets/school/chat.png';
import like from '../../assets/school/like.png';
import { useNavigation } from '@react-navigation/native';

const CouncilCard = () => {
	const navigation = useNavigation()
	
  return (
    <View style={styles.container}>
			<View style={styles.nav}>
				<TouchableOpacity onPress={() => navigation.navigate('Council')}><Image source={council}/></TouchableOpacity>
				<Text style={styles.name}>학생회</Text>
				<Text style={styles.date}>2023.00.00</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.text}>안녕하십니까 32기 학생회입니다.새 학기를 맞아 학생 교류 이벤트인 '모여봐요 미림의 봄'을 진행하게 되었습니다</Text>
				<View style={styles.imageContainer}>
					<Image source={image} style={styles.imageBox}/>
					<Image source={image} style={styles.imageBox}/>
				</View>
			</View>
			<View style={styles.content2}>
				<TouchableOpacity style={styles.comment}>
					<Image source={chat}/>
					<Text style={styles.number}>0,000</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.like}>
					<Image source={like}/>
					<Text style={styles.number}>0,000</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 324,
		marginTop: 12,
		backgroundColor: 'rgba(255, 255, 255, 1)',
		borderWidth: 1,
		borderColor: 'rgba(233, 233, 233, 1)',
		borderRadius: 12
	},
	nav: {
		width: '100%',
		height: 64,
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 24
	},
	name: {
		marginLeft: 6,
		fontSize: 16,
		fontWeight: 500
	},
	date: {
		marginLeft: 6,
		fontSize: 12,
		color: 'rgba(167, 167, 167, 1)'
	},
	content: {
		marginLeft: 24,
		marginRight: 24
	},
	text: {
		fontSize: 14,
		fontWeight: 400,
		color: 'rgba(90, 90, 90, 1)'
	},
	imageContainer: {
		flexDirection: 'row',
		marginLeft: -7
	},	
	imageBox: {
		width: 136,
		height: 136,
		marginTop: 10,
		marginLeft: 7,
		borderWidth: 1,
		borderColor: 'rgba(233, 233, 233, 1)',
		borderRadius: 10
	},
	content2: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	comment: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	like: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 14,
		marginRight: 24
	},
	number: {
		marginLeft: 7,
		fontSize: 12,
		fontWeight: 400
	},
	bottom: {
		marginTop: 30
	}
});

export default (CouncilCard);