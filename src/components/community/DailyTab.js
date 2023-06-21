import React,{useEffect, useState} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DailyTab = () => {
	const navigation = useNavigation()
    const param = 'daily';
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
    });
    const getData = async () => {
        await fetch(`http://10.96.123.101:3300/community/tab/${param}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(json =>{setData(json)})
        .catch(err => console.log('에러!',err))
    }
    const renderItem = ({item}) => {
        return(
            <View key={item.id}>
                <TouchableOpacity onPress={()=>{
                    navigation.push("DetailedCommunity",{id: item.post_id})
                }} style={styles.postBox} >
                    <Text style={styles.postCategory}>{item.category}</Text>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <View style={styles.postInfo}>
                        <Text style={styles.postInfoTxt}>{item.nickname}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.upload_date}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.post_views}</Text>
                    </View>
                    <View style={styles.postLikes}>
                        <Image source={require('../../assets/community/comment.png')}></Image>
                        <Text style={styles.postLikesTxt}>{item.comments}</Text>
                        <Image source={require('../../assets/community/thumb.png')}></Image>
                        <Text style={styles.postLikesTxt}>{item.likes}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <View style={{flex: 1,backgroundColor: 'white'}}>
            <View style={styles.box}>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}/>
            </View>
            <TouchableOpacity style={styles.addPost} onPress={()=> navigation.push('NewPost')}>
                    <Image source={require('../../assets/community/floating_btn.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        bottom: 10,
        right: 24,
        position: 'absolute',
        // marginRight: 16,
        // marginBottom: 92,
        display: 'flex'
    }
})

export default DailyTab;