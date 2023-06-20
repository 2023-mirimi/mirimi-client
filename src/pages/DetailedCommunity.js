import React, { useEffect, useState } from "react";
import { StyleSheet, View,Text, Image, TouchableOpacity, TextInput, 
    KeyboardAvoidingView,Pressable,Keyboard,Platform, FlatList, ScrollView } from "react-native";
import like from "../assets/community/thumb.png";
import share from "../assets/community/share-ios.png";
import horn from "../assets/community/horn.png";
import profile from "../assets/mypage/profile.png";
import Return from "../assets/community/return.png";
import More from "../assets/community/more.png";
import axios from "axios";

const DetailedCommunity = ({navigation, route}) => {
    const postID = route.params.id;
    const [replyValue, setReplyValue] = useState('');
    const [reply, setReply] = useState([
        {
            // id: 0,
            post_id: '',
            nickname: '',
            reply_content: '',
            reply_date: '',
        }
    ]);
    const [post, setPost] = useState([]);
    const [imageIdx, setImageIdx] = useState(0);
    const images = [
        require('../assets/community/thumb.png'),
        require('../assets/community/thumb-up.png')
    ];

    useEffect(()=> {
        axios.get(`http://10.96.123.101:3300/community/${postID}`, {
        headers: {'Content-Type': 'application/json'}
        }).then(res =>{ 
            // const data = res.json();
            setPost(res.data.post[0]) //게시글 내용
            setReply(res.data.reply)
            // console.log('게시글 내용 : ',res.data.post[0])
            // console.log('댓글 내용 --> ',res.data.reply[0])
            // setReply(data.reply) //게시글 댓글
        })
        .catch(err => console.log('/community/:postID 에러', err))
    }, [reply])
    //댓글 추가 버튼 이벤트
    const addReply = () => {
        console.log(replyValue);
        
        axios.post(`http://10.96.123.101:3300/community/${postID}`, {replyValue: replyValue}, {

        }).then(res => console.log('새로운 댓글 추가 완료!'))
        .catch(err => console.log('에러 발생!'))
    }
    const handleButtonPress = () => {
        setImageIdx((preIndex) => (preIndex === 0 ? 1 : 0));
    }
    const renderItem = ({item}) => {
        return(
            <ScrollView>
                <View style={styles.replyBox}>
                    <View style={styles.replyUser}>
                        <Image source={profile} style={{width: 36, height: 36}}/>
                        <Text>{item.nickname}</Text>
                    </View>
                    <Text>{item.reply_content}</Text>
                </View>
            </ScrollView>
        )
    }
    return(
        <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.category}>{post.category}</Text>
                        <TouchableOpacity>
                            <Image source={More}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{post.title}</Text>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>{post.nickname}</Text>
                        <Text style={styles.infoText}>|</Text>
                        <Text style={styles.infoText}>{post.upload_date}</Text>
                        <Text style={styles.infoText}>|</Text>
                        <Text style={styles.infoText}>{post.post_views}</Text>
                    </View>
                    <View style={styles.content}>
                    <Text>{post.content}</Text>
                    </View>
                    <View style={styles.iconBox}>
                        <TouchableOpacity onPress={handleButtonPress}>
                            <Image style={styles.icon} source={images[imageIdx]}/>
                        </TouchableOpacity>
                        {/* <Text>{post.likes}</Text> */}
                        <TouchableOpacity>
                            <Image style={styles.icon} source={share}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={horn}/>
                        </TouchableOpacity>
                    </View>
                </View>
                    <View>
                    <FlatList 
                        data={reply}
                        renderItem={renderItem}/>
                    </View>
                
            </View>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
            <View style={styles.footer}>
                <TextInput 
                    value={replyValue}
                    onChangeText={(value) => setReplyValue(value)}
                    style={styles.replyInput} 
                    placeholder="댓글을 작성해주세요."/>
                <TouchableOpacity style={styles.replyBtn} onPress={addReply}>
                    <Image source={Return}/>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        gap: 12,
        padding: 24,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        height: 272,
    },
    content: {
        // paddingHorizontal: 24,
        // paddingBottom: 24,
        paddingVertical: 16,
    },
    category: {
        color: '#17E381', fontSize: 16, fontWeight: 500,
    },
    title: {
        fontSize: 20, fontWeight: 700,
    },
    infoBox: {
        flexDirection: 'row',
        gap: 10,
    },
    infoText: {
        color: '#A7A7A7',
    },
    iconBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 48,
    }, 
    icon: {
        width: 32,
        height: 32
    },
    footer: {
        padding: 100,
        paddingTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    replyInput: {
        height: 42,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        width: 285,
    },
    replyBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        borderRadius: 8,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 9,
        paddingBottom: 9,
        backgroundColor: '#17E381',
    },
    replyBox: {
        gap: 8,
        padding: 16,
        borderBottomWidth: 0.8,
        borderBottomColor: '#F2F2F2',
    },
    replyUser: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
});

export default DetailedCommunity;