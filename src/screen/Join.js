import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Join = ({navigation}) => {
    return(
        <View style={{backgroundColor: '#FFF', height: 812}}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                        <Image source={require('../../public/back.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerCenter}>
                    {/* <Image source={"../../public/chevron-left.svg"}></Image> */}
                    <Text style={{fontSize: 16,fontWeight: 500,}}>회원가입</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View>
                    <Text style={styles.text}>이름</Text>
                    <View style={styles.form}>
                        <TextInput style={styles.inputName} placeholder="이름"/>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>이메일</Text>
                    <View style={styles.form}>
                        <TextInput style={styles.inputEmail} placeholder="학교 이메일"/>
                        <Text style={{color:'gray'}}>@</Text>
                        <TextInput style={styles.email} value="e-mirim.hs.kr"/>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>학생정보</Text>
                    <View style={styles.form}>
                        <TextInput style={styles.inputGrade} placeholder="" inputMode='tel'/>
                        <Text style={{color:'gray', marginRight: 16}}>학년</Text>
                        <TextInput style={styles.inputGrade} inputMode='tel'/>
                        <Text style={{color:'gray', marginRight: 16}}>반</Text>
                        <TextInput style={styles.inputNum} inputMode='tel'/>
                        <Text style={{color:'gray'}}>번</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>닉네임</Text>
                    <View style={styles.form}>
                        <TextInput style={styles.inputNick} placeholder="닉네임을 작성해주세요"/>
                        <TouchableOpacity> 
                            <View style={styles.button}>
                                <Text style={styles.buttonTxt}>중복확인</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>비밀번호</Text>
                    <View style={styles.formPW}>
                        <TextInput style={styles.inputPW} placeholder="비밀번호"/>
                        <TextInput style={styles.inputPW} placeholder="비밀번호 확인"/>
                    </View>
                    <Text style={{marginTop: 6, color: '#414141'}}>* 영문 대문자, 숫자를 조합해 6자~20자로 입력해주세요.</Text>
                </View>
                <BouncyCheckbox
                    style={{marginTop: 20, marginBottom: -10}}
                    size={25}
                    fillColor="#17E381"
                    unfillColor="#FFFFFF"
                    text="이용약관 및 개인정보취급방침에 동의합니다. (필수)"
                    innerIconStyle={{ borderWidth: 2, borderRadius: 4 }}
                    iconStyle={{borderRadius:4}}
                    textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: 'none' }}
                    onPress={(isChecked: boolean) => {}}
                />
                <TouchableOpacity onPress={()=> navigation.navigate("Community")}> 
                    <View style={styles.joinButton}>
                        <Text style={{fontWeight: 500,fontSize: 16}}>회원가입</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: 375,
        marginTop: 44,
        alignItems: 'center',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 0.8,
    },
    headerLeft: {
        width: 24,
        height: 24,
        marginLeft: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCenter: {
        width: 335,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 40,
    },
    main: {
        marginLeft: 16,
        paddingTop: 22,
        flexDirection: 'column',
        gap: 24,
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 12,
    },
    inputName: {
        width: 343,
        height: 44,
        paddingLeft: 16,
        borderRadius: 8,
        backgroundColor: '#F2F2F2'
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    inputEmail: {
        width: 187,
        height: 44,
        backgroundColor: '#F2F2F2',
        paddingLeft: 16,
        borderRadius: 8,
    },
    email: {
        width: 131,
        height: 44,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        paddingLeft: 16,
    },
    inputGrade: {
        width: 50,
        height: 44,
        backgroundColor: '#F2F2F2',
        paddingLeft: 16,
        borderRadius: 8,
    },
    inputNum: {
        width: 100,
        height: 44,
        backgroundColor: '#F2F2F2',
        paddingLeft: 16,
        borderRadius: 8,
    },
    inputNick: {
        width: 226,
        height: 44,
        backgroundColor: '#F2F2F2',
        paddingLeft: 16,
        borderRadius: 8,
    },
    button: {
        height: 44,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
        width: 109,
        borderRadius: 8,

    },
    inputPW: {
        width: 343,
        height: 44,
        backgroundColor: '#F2F2F2',
        paddingLeft: 16,
        borderRadius: 8,
    },
    formPW: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6
    },
    joinButton: {
        width: 343,
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#17E381',
        borderRadius: 50,
    },
})

export default Join;