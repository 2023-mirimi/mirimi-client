import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {  WithLocalSvg } from 'react-native-svg';
import face from '../assets/face.svg';

const OnBoarding2 = ({navigation}) => {
  return (
    <View style={styles.container}>
        <WithLocalSvg
            style={styles.emoji}
            width={140}
            height={140}
            asset={face}/>
        <Text style={styles.title}>오늘 급식 뭐였더라?</Text>
        <Text style={styles.title}>이번주 학사 일정 뭐 있었더라?</Text>
        <Text style={[styles.content, {marginTop: 12}]}>학교 생활하며 궁금했던 정보들이</Text>
        <Text style={styles.content}>미리미에 다 있어요!</Text>
        <View style={styles.dots}>
            <View style={styles.dot}/>
            <View style={styles.selectedDot}/>
            <View style={styles.dot}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('온보딩3')}><Text>넘어가기</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        paddingTop: 140,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    emoji: {
        marginTop: 140,
        marginBottom: 36
    },
    title: {
        fontSize: 20,
        fontWeight: 700
    },
    content: {
        fontSize: 16,
        fontWeight: 400
    },
    dots: {
        width: 30,
        flexDirection: 'row',
        marginTop: 150,
        marginLeft: -6
    },
    selectedDot: {
        width: 6,
        height: 6,
        marginLeft: 6,
        borderRadius: 6/2,
        backgroundColor: 'rgba(23, 227, 129, 1)'
    },
    dot: {
        width: 6,
        height: 6,
        marginLeft: 6,
        borderRadius: 6/2,
        backgroundColor: 'rgba(233, 233, 233, 1)'
    },
    button: {
        width: 343,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 19,
        borderRadius: 24,
        backgroundColor: 'rgba(23, 227, 129, 1)',
    }
});

export default OnBoarding2;