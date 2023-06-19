import React, { useEffect } from "react";
import { StyleSheet,View, Text,TouchableOpacity, 
    Image, TextInput, Pressable, Keyboard, Alert, Button, Modal,RadioButton } from "react-native";
import { useState, useMemo } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import RNPoll, {IChoice} from "react-native-poll";
import CheckUploadModal from "../components/community/CheckUploadModal";
import imageIcon from "../assets/community/image.png";
import location from "../assets/community/location.png";
import poll from "../assets/community/poll.png";
import pin from "../assets/community/pin.png";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

const NewPost = ({navigation}) => {
    const [post, setPost] = useState({
        title: '',
        category: '',
        content: '',
        imgs: '',
        // date: null,
    })
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('카테고리');
    const [inputHeight, setInputHeight] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [uploadModalVisible, setuploadModalVisible] = useState(false);
    const radioButtons = useMemo(() => ([
        {
            id: '일상', // acts as primary key, should be unique and non-empty string
            value: '일상',
            borderColor: '#CDCDCD',
            borderSize: 1.5,
            color: '#17E381',
            size: 24,
            labelStyle: {
                color: '#414141',
            },
            containerStyle: {
                alignSelf: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        {
            id: '취업',
            value: '취업',
            borderColor: '#CDCDCD',
            borderSize: 1.5,
            color: '#17E381',
            size: 24,
            labelStyle: {
                color: '#414141',
            },
            containerStyle: {
                alignSelf: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        {
            id: '학교',
            value: '학교',
            borderColor: '#CDCDCD',
            borderSize: 1.5,
            color: '#17E381',
            size: 24,
            labelStyle: {
                color: '#414141',
            },
            containerStyle: {
                alignSelf: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        {
            id: '공모전',
            value: '공모전',
            borderColor: '#CDCDCD',
            borderSize: 1.5,
            color: '#17E381',
            size: 24,
            labelStyle: {
                color: '#414141',
            },
            containerStyle: {
                alignSelf: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    ]), []);

    const handleInputChange = (key,value) => {
        setPost((prevPostData) => ({
            ...prevPostData,
            [key]: value,
        }))
    }
    
    const handleContentSizeChange = (event) => {
        setInputHeight(event.nativeEvent.contentSize.height);
    };

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState('');

    useEffect(()=>{
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const selectImage = async () => {
        let options = {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        };

        const result = await ImagePicker.launchImageLibraryAsync(options);
        
        if (!result.canceled) {
            await setImage(result.assets[0].uri);
            console.log(result.assets[0]);
        }
    }

    const saveBtn = async () => {
        // await handleInputChange('date', new Date().toLocaleString());
        if(post.title == '' || post.content == ''){
            return Alert.alert('다시 입력하세요.')
        } else {
            await axios.post('http://10.96.123.101:3300/community', post,  {
            headers: {'Content-Type': 'application/json'}
                }).then(res => {
                    console.log('새로운 글 추가 요청!', res);
                    // 커뮤니티 페이지로 이동하는 네비게이션 추가하기 
                }).catch(err => {
                    console.log(err);
                })
            return "Success"
        }    
        
    }

    return(
        <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
            <StatusBar style="dark"/>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Root")} style={styles.menuBtn}>
                        <Image source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>게시글 작성</Text>
                    <TouchableOpacity 
                        onPress={() =>{
                            // const uploadResult = saveBtn(); 
                            // if(uploadResult == "Success"){
                            //     console.log('게시글 추가 성공!');
                            //     navigation.navigate("Community")
                            // } else if(saveBtn() == "Fail") {
                            //     Alert.alert('업로드 실패', '제목 또는 내용을 입력해주세요')
                            // }
                            // setuploadModalVisible(true)
                            }}>
                        <Text style={styles.uploadBtn}>업로드</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput  
                        style={styles.title} 
                        placeholder="제목" 
                        value={post.title}
                        onChangeText={(value) => handleInputChange('title', value)}
                    />
                    <TouchableOpacity style={styles.title} onPress={()=>setModalVisible(!modalVisible)}>
                        <Text>{category}</Text>
                        <Image source={require('../assets/community/chevron-down.png')}/>
                    </TouchableOpacity>
                    
                    <View>
                        <TextInput
                            multiline={true}
                            onContentSizeChange={handleContentSizeChange}
                            placeholder={"내용을 입력하세요."}
                            maxLength={500}
                            style={{ height: inputHeight, 
                                minHeight: 200,
                                // backgroundColor: 'pink',
                                paddingTop: 16,
                                paddingLeft: 16,
                                paddingRight: 16,
                                paddingBottom: 16,
                                fontSize: 16,
                            }}
                            value={post.content} 
                            onChangeText={(value) => handleInputChange('content',value)}
                        />
                        <View style={styles.attachContainer}>
                            { image && <Image source={{uri: image}} style={styles.attachBox}/> }
                        </View>
                        <Text style={styles.contentLimit}>0 / 500자</Text>
                    </View>
                    <View style={styles.attachIcons}>
                        <TouchableOpacity onPress={()=>selectImage()}>
                            <Image source={imageIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={poll} />
                        </TouchableOpacity>
                           <Image source={pin} />
                        <Image source={location} />
                        <TouchableOpacity>
                            <Text style={{paddingLeft: 128}}>미리보기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CheckUploadModal />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    radioView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioLabel: {
        flexDirection: 'column',
        gap: 24,
        width: 280,
        justifyContent: 'space-around',
    },
    radioTxt: {
        fontSize: 16,
        fontWeight: 500,
        color: '#414141',
    },
    modalHeaderView: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '104%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
        height: 0,
    },
    modalView: {
        margin: 20,
        marginBottom: 0,
        backgroundColor: 'white',
        borderRadius: 36,
        padding: 35,
        width: '100%',
        height: 450,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 500,
    },
    attachContainer: {
        backgroundColor: 'pink',
        flexDirection: 'row',
    },
    attachBox: {
        width: 70,
        height: 70,
        position: 'absolute',
        top: 200,
        marginLeft: 16,
    },
    attachIcons: {
        flexDirection: 'row',
        borderTopColor: '#F3F3F3',
        borderTopWidth: 1,
        alignItems: 'center',
        position: 'absolute',
        gap: 20,
        padding: 16,
        top: 610,
    },
    contentLimit: {
        position: 'absolute',
        top: 480,
        left: 310,
        color: '#8A8A8A',
    },
    title: {
        padding: 16,
        fontSize: 16,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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