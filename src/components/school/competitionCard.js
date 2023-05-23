import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import filledHeart from '../assets/filledHeart.png';
import profile from '../assets/cat.png';

const CompetitionCard = () => {
  return (
    <View style={styles.container}>
		<View style={styles.header}>
			<Image source={profile} style={styles.profile}/>
			<View>
				<Text style={styles.hostName}>기관명</Text>
				<Text style={styles.name}>공모전명</Text>
			</View>
		</View>
		<View>
			<Text style={styles.info}>공모전에 대한 설명입니당</Text>
			<View style={styles.tagContainer}>
				<Text style={styles.tag}>#HTML</Text>
				<Text style={styles.tag}>#HTML</Text>
			</View>
		</View>
		<View style={styles.bottom}>
			<View style={styles.dDayContainer}>
				<Text style={styles.text}>마감까지</Text>
				<Text style={styles.dDay}>D-3</Text>
			</View>
			<TouchableOpacity style={styles.button}>
				<Image source={filledHeart}/>
			</TouchableOpacity>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		width: 168,
		height: 180,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 8,
		borderWidth: 1,
		borderColor: 'rgba(221, 221, 221, 1)',
		borderRadius: 14
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		marginLeft: 20
	},
	profile: {
		width: 40,
		height: 40,
		marginRight: 10,
		borderWidth: 1,
		borderColor: 'rgba(214, 214, 214, 1)',
		borderRadius: 14
	},
	hostName: {
		fontSize: 12,
		fontWeight: 400,
		color: 'rgba(138, 138, 138, 1)'
	},
	name: {
		fontSize: 16,
		fontWeight: 700
	},
	info: {
		marginTop: 8,
		fontSize: 12,
		fontWeight: 400,
		color: 'rgba(90, 90, 90, 1)'
	},
	tagContainer: {
		flexDirection: 'row',
		marginTop: 8,
		marginLeft: -6
	},
	tag: {
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 6,
		paddingRight: 6,
		marginLeft: 6,
		backgroundColor: 'rgba(23, 227, 129, 0.15)',
		borderRadius: 4,
		fontSize: 12,
		fontWeight: 400
	},
	bottom: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 12
	},
	dDayContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 12,
		fontWeight: 400
	},
	dDay: {
		paddingLeft: 4,
		fontSize: 20,
		fontWeight: 500
	},
	button: {
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'rgba(233, 233, 233, 1)',
		borderRadius: 8
	}
});

export default CompetitionCard;