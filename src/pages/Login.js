import React, { useState } from 'react'
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/FontAwesome';

export default Login = ({navigation}) => {
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')}></Image>
            <Image source={require('../assets/mirimi.png')}></Image>
            <View style={styles.login}>
                <TextInput style={styles.inputTxt} placeholder='이메일'></TextInput>
                <TextInput style={styles.inputTxt} placeholder='비밀번호' secureTextEntry={isSecureEntry}></TextInput>
                <View style={styles.showPW}>
                    <Text style={styles.showPwTxt}>비밀번호 보기</Text>
                    <BouncyCheckbox 
                        size={18}
                        onPress={() => {
                            setIsSecureEntry(prev => !prev)
                        }}
                        fillColor="#17E381"
                        unfillColor='#E4E4E4'
                        innerIconStyle={{ borderWidth: 0 }}
                    />
                </View>
                <TouchableOpacity> 
                    <View style={styles.button}>
                        <Text style={styles.buttonTxt}>로그인</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.signup}>
                <Text>아직 계정이 없으신가요?</Text>
                <Button onPress={() => navigation.navigate("Join")} title='회원가입' color='#000'></Button>
            </View>
        </View>               
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        paddingTop: 190,
        backgroundColor: '#fff',
        height: 812,
    },
    login: {
        marginTop: 44,
        flexDirection: 'column',
        gap: 10,
    },
    inputTxt: {
        height: 50,
        padding: 16,
        width: 343,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 20,
    },
    showPW: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 6,
    },
    showPwTxt: {
        color: '#414141'
    },

    button: {
        width: 343,
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#17E381',
        borderRadius: 50,
        marginTop: 20,
    },
    buttonTxt: {
        fontWeight: 500,
        fontSize: 16,
    },
    signup: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
