import React, { useEffect, useState } from "react";
import { StyleSheet, View,Text, Image, TouchableOpacity, TextInput,
    KeyboardAvoidingView,Pressable,Keyboard,Platform, FlatList, ScrollView, TouchableWithoutFeedback } from "react-native";
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
            reply_profile: ''
        }
    ]);
    const [post, setPost] = useState([]);
    //좋아요 이미지 누를 시 
    const handleButtonPress = async () => {
        await setImageIdx((preIndex) => (preIndex === 0 ? 1 : 0));
        //1: 좋아요 취소, 0 : 좋아요!
        // await AsyncStorage.setItem('imageIdx', imageIdx);
    }
    //좋아요 눌렀는지 아닌지 가져오기
    // const getImage = async () => {
    //     console.log(imageIdx)
    //     return await AsyncStorage.getItem('imageIdx');
    // }
    const [imageIdx, setImageIdx] = useState(0);
    const images = [
        require('../assets/community/thumb.png'),
        require('../assets/community/thumb-up.png')
    ];
    //게시글 내용 가져오기
    useEffect(()=> {
        axios.get(`https://port-0-mirimi-server-7xwyjq992llj6avrsp.sel4.cloudtype.app/community/${postID}`, {
        headers: {'Content-Type': 'application/json'}
        }).then(res =>{ 
            setPost(res.data)
        })
        .catch(err => console.log('/community/:postID 에러', err))
    }, [])

    //댓글 가져오기
    useEffect(() => {
        axios.get(`https://port-0-mirimi-server-7xwyjq992llj6avrsp.sel4.cloudtype.app/community/reply/${postID}`, {
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            setReply(res.data)
        })
    }, [reply])

    //댓글 추가하기
    const addReply = async () => {
        console.log('댓글 추가');
          
        Keyboard.dismiss();
        axios.post(`https://port-0-mirimi-server-7xwyjq992llj6avrsp.sel4.cloudtype.app/community/${postID}`, 
            {
                replyValue: replyValue
            }, {

        }).then(res => console.log('새로운 댓글 추가 완료!'))
        .catch(err => console.log('에러 발생!'))

        await Notifications.scheduleNotificationAsync({
            content: {
              title: 'Toast Message',
              body: '댓글이 추기되었습니다.',
            },
            trigger: null, // 즉시 표시하려면 'trigger'를 null로 설정합니다.
        }).then(res => console.log('토스트메시지'));
    }

    const renderItem = ({item}) => {
        return(
            <TouchableWithoutFeedback>
                <View style={styles.replyBox}>
                    <View style={styles.replyUser}>
                        <Image source={{uri: item.reply_profile}} style={{width: 36, height: 36}}/>
                        <Text>{item.nickname}</Text>
                    </View>
                    <View style={styles.replyBox2}>
                        <Text style={styles.replyContent}>{item.reply_content}</Text>
                        <Text style={styles.replyDate}>{item.reply_date}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
                
            <FlatList 
                style={styles.scroll}
                data={reply}
                renderItem={renderItem}/>
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
    scroll: {
        zIndex: 1000
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
        paddingBottom: 100,
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
    replyBox2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    replyContent: {
        fontWeight: 500,
        fontSize: 16,
        paddingBottom: 4,
        paddingTop: 4
    },
    replyDate: {
        color: '#CDCDCD',
        position: 'absolute',
        right: 8,
    }
});

export default DetailedCommunity;