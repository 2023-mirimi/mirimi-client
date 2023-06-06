import React from "react";
import { StyleSheet,View, Text,TouchableOpacity,Image, TextInput, Pressable, Keyboard } from "react-native";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import AutoHeightTextInput from "../components/community/AutoHeightTextInput";
import image from "../assets/community/image.png";
import location from "../assets/community/location.png";
import poll from "../assets/community/poll.png"
import pin from "../assets/community/pin.png"
import { useNavigation } from "@react-navigation/native";

const NewPost = () => {
	const navigation = useNavigation()
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [items, setItems] = useState([
        {label: '일상', value: 'daily'},
        {label: '취업', value: 'employment'},
        {label: '학교', value: 'school'},
        {label: '공모전', value: 'contest'}
    ]);
    return(
        <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Root")} style={styles.menuBtn}>
                        <Image source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>게시글 작성</Text>
                    <TouchableOpacity>
                        <Text style={styles.uploadBtn}>업로드</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.title} placeholder="제목"/>
                    <DropDownPicker 
                        open={open}
                        value={category}
                        items={items}
                        setOpen={setOpen}
                        setValue={setCategory}
                        setItems={setItems}
                        disableBorderRadius={true}
                        onClose={() => console.log(category)} //선택한 카테고리
                        translation={{
                            PLACEHOLDER: "카테고리"
                        }}
                        dropDownContainerStyle={{
                            borderBottomColor: '#F3F3F3',
                            borderRadius: 10,
                            borderColor: 0,
                            backgroundColor: '#FAFAFA',
                        }}
                        style={{
                            borderBottomColor: '#F3F3F3',
                            borderColor: 0,
                            borderRadius: 0,
                        }}
                        labelStyle={{
                            color: '#414141',
                            padding: 4,

                        }}
                        textStyle={{
                            color: '#414141',
                            padding: 4,
                        }}
                    />
                    <View>
                        <AutoHeightTextInput placeholder={"내용을 입력하세요."}/>
                        <Text style={styles.contentLimit}>0 / 500자</Text>
                    </View>
                    <View style={styles.attachBox}>
                        <Image source={image} />
                        <Image source={poll} />
                        <Image source={pin} />
                        <Image source={location} />
                        <TouchableOpacity>
                            <Text style={{paddingLeft: 128}}>미리보기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    attachBox: {
        flexDirection: 'row',
        borderTopColor: '#F3F3F3',
        borderTopWidth: 1,
        alignItems: 'center',
        position: 'absolute',
        gap: 20,
        padding: 16,
        top: 610,
        // left: 310,
    },
    contentLimit: {
        position: 'absolute',
        top: 480,
        left: 310,
        // textAlign: 'right',
        // paddingBottom: 16,
        // paddingTop: 16,
        color: '#8A8A8A',
    },
    title: {
        padding: 16,
        fontSize: 16,
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 1,
    },
    container: {
        width: 376,
        height: 812,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 44,
        height: 44,
        width: 375,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row'
    },
    headerTxt: {
        fontSize: 16,
        fontWeight: 900,
    },
    uploadBtn: {
        fontSize: 14,
    }
})

export default NewPost;