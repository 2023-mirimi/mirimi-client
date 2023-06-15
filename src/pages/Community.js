import React from "react";
import { Text, View, StyleSheet,Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";

const DATA = [
    {
        id: 1,
        category: '일상',
        title: '다들 졸려죽을 땐 어떻게 함?',
        user: '3311 하진',
        date: '2023-06-13',
        views: '59',
        comments: '2345',
        likes: '1234'
    },
    {
        id: 2,
        category: '일상',
        title: '일이삼사오육칠팔구십빠 제발 날 집에 좀 보내줭',
        user: '3311 하진',
        date: '2023-06-13',
        views: '59',
        comments: '2345',
        likes: '1234'
    }
]

const Community = ({navigation, routes}) => {
    // const {post} = useParams();
    const renderItem = ({item}) => {
        return(
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("DetailedCommunity", DATA)} style={styles.postBox} >
                    <Text style={styles.postCategory}>{item.category}</Text>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <View style={styles.postInfo}>
                        <Text style={styles.postInfoTxt}>{item.user}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.date}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.views}</Text>
                    </View>
                    <View style={styles.postLikes}>
                        <Image source={require('../assets/community/comment.png')}></Image>
                        <Text style={styles.postLikesTxt}>{item.comments}</Text>
                        <Image source={require('../assets/community/thumb.png')}></Image>
                        <Text style={styles.postLikesTxt}>{item.likes}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <Header name={"커뮤니티"}/>
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
            <View style={styles.box}>
                <FlatList 
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}/>
            </View>
            <TouchableOpacity style={styles.addPost} onPress={()=> navigation.navigate('NewPost')}>
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
        marginRight: 16,
    },
    postBox: {
        width: 343,
        padding: 16,
        height: 142,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 16,
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
        marginTop: 28,
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