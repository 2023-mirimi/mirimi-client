import React from "react";
import { Text, View, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native';

const Community = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuBtn}>
                    <Image source={require('../assets/header/menu.png')} style={styles.leftIcon}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>커뮤니티</Text>
                <TouchableOpacity style={styles.menuBtn}>
                    <Image source={require('../assets/header/bell.png')} style={styles.leftIcon}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.category}>
                <TouchableOpacity >
                    <Text style={styles.categoryTxt}>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.categoryTxt}>일상</Text>
                </TouchableOpacity><TouchableOpacity >
                    <Text style={styles.categoryTxt}>취업</Text>
                </TouchableOpacity><TouchableOpacity >
                    <Text style={styles.categoryTxt}>학교</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.categoryTxt}>공모전</Text>
                </TouchableOpacity>
            </View>
            {/* 게시글 리스트 */}
            <ScrollView>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.postBox} onPress={()=>navigation.navigate("DetailedCommunity")}>
                        <Text style={styles.postCategory}>일상</Text>
                        <Text style={styles.postTitle}>안녕하세요 집에 가고 싶지만 집에 갈 수 없워용 제발 날 집에 보내줭~!~!~!</Text>
                        <View style={styles.postInfo}>
                            <Text style={styles.postInfoTxt}>작성자  |</Text>
                            <Text style={styles.postInfoTxt}>2023.05.18  |</Text>
                            <Text style={styles.postInfoTxt}>{Number}views</Text>
                        </View>
                        <View style={styles.postLikes}>
                            <Image source={require('../assets/community/comment.png')}></Image>
                            <Text style={styles.postLikesTxt}>1,234</Text>
                            <Image source={require('../assets/community/thumb.png')}></Image>
                            <Text style={styles.postLikesTxt}>1,234</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addPost} onPress={()=> navigation.navigate("NewPost")}>
                    <Image source={require('../assets/community/floating_btn.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 812,
        backgroundColor: '#fff'
    },
    header: {
        width: 375,
        height: 44,
        marginTop: 44,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    category: {
        width: 375,
        height: 44,
        gap: 40,
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
    },
    categoryTxt: {
        fontSize: 18,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 44,
        marginLeft: 16,
        marginRight: 16
    },
    postBox: {
        width: 343,
        padding: 16,
        height: 152,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 10
    },
    postCategory: {
        fontSize: 14,
        color: '#17E381',
        fontWeight: 'bold'
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 700,
        marginTop: 4,
        marginBottom: 8
    },
    postInfo: {
        flexDirection: 'row',
        gap: 8,
        color: '#E9E9E9'
    },
    postInfoTxt: {
        color: '#5A5A5A'
    },
    postLikes: {
        flexDirection: 'row',
        marginTop: 18,
        justifyContent: 'flex-end',
        gap: 6,
        alignItems: 'center'
    },
    postLikesTxt: {
        color: '#5A5A5A',
    },
    addPost: {
        bottom: 0,
        right: 0,
        position: 'absolute',
        marginRight: 16,
        marginBottom: 92,
        display: 'flex'
    }
});

export default Community;