import React, { useState } from "react";
import { StyleSheet, View,Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView,Pressable,Keyboard,Platform } from "react-native";
import like from "../assets/community/thumb.png";
import share from "../assets/community/share-ios.png";
import horn from "../assets/community/horn.png";
import profile from "../assets/mypage/profile.png";
import Return from "../assets/community/return.png";
import More from "../assets/community/more.png";

const DetailedCommunity = ({navigation}) => {
    const [replyValue, setReplyValue] = useState('');
    return(
        <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.category}>일상</Text>
                        <TouchableOpacity>
                            <Image source={More}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>글 제목</Text>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>작성자</Text>
                        <Text style={styles.infoText}>|</Text>
                        <Text style={styles.infoText}>작성일</Text>
                        <Text style={styles.infoText}>|</Text>
                        <Text style={styles.infoText}>조회수</Text>
                    </View>
                    <View style={styles.content}>
                    <Text>안녕하세요. 이곳은 글 내용을 나타내는 곳입니다. 멋있는 글이 있습니다.</Text>
                    </View>
                    <View style={styles.iconBox}>
                        <TouchableOpacity>
                            <Image source={like}/>
                        </TouchableOpacity>
                        <Text>0</Text>
                        <TouchableOpacity>
                            <Image source={share}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={horn}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.replyBox}>
                    <View style={styles.replyUser}>
                        <Image source={profile} style={{width: 36, height: 36}}/>
                        <Text>닉네임</Text>
                    </View>
                    <Text>안녕하세요. 이것은 댓글입니다.</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
            <View style={styles.footer}>
                <TextInput style={styles.replyInput} placeholder="댓글을 작성해주세요."/>
                <TouchableOpacity style={styles.replyBtn}>
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