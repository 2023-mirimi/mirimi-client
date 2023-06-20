import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

const Community = ({navigation}) => {
    let id = 0
    const [data, setData] = useState([
        {
            post_id: 0,
            category: '',
            title: '',
            user: '',
            date: '',
            views: '',
            comments: '',
            likes: ''
        }
    ]);
    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
        await fetch('http://10.96.123.101:3300/community', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(json =>{
            setData(json)})
    }
    const renderItem = ({item}) => {
        return(
            <View key={item.id}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("DetailedCommunity",{id: item.post_id})
                }} style={styles.postBox} >
                    <Text style={styles.postCategory}>{item.category}</Text>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <View style={styles.postInfo}>
                        <Text style={styles.postInfoTxt}>{item.nickname}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.upload_date}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.post_views}</Text>
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
    const initialTabs = [
        {key: 'tab1', title: '전체'}
    ]

    return(
        <View style={styles.container}>
            <StatusBar style="dark"/>
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
                    data={data}
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