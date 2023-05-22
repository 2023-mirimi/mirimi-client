import React from "react";
import { StyleSheet,View, Text,TouchableOpacity,Image, TextInput } from "react-native";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';

const NewPost = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [items, setItems] = useState([
        {label: '일상', value: 'daily'},
        {label: '취업', value: 'employment'},
        {label: '학교', value: 'school'},
        {label: '공모전', value: 'contest'}
    ]);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Community")} style={styles.menuBtn}>
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
                    <TextInput style={styles.content} placeholder="내용을 입력하세요." multiline={true}  maxLength={500}/>
                    <Text style={styles.contentLimit}>0 / 500자</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentLimit: {
        textAlign: 'right',
        paddingRight: 16,
        paddingTop: 16,
        color: '#8A8A8A',
        
    },
    content: {
        height: 500,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 1,
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