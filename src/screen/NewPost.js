import React from "react";
import { StyleSheet,View, Text,TouchableOpacity,Image, TextInput } from "react-native";
import Picker from '@react-native-picker/picker';

const NewPost = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState("카테고리");
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Community")} style={styles.menuBtn}>
                    <Image source={require('../../public/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>게시글 작성</Text>
                <TouchableOpacity>
                    <Text style={styles.uploadBtn}>업로드</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput style={styles.title} placeholder="제목"/>
                <TextInput style={styles.title} placeholder="카테고리"/>
                <Picker
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCategory(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        padding: 16,
        fontSize: 16,
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 1,
    },
    container: {
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