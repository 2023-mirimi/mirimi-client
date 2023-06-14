import React, { useEffect } from "react";
import { StyleSheet,View, Text,TouchableOpacity, 
    Image, TextInput, Pressable, Keyboard, Alert, Button, Modal,RadioButton } from "react-native";
import { useState, useMemo } from "react";
import * as ImagePicker from 'expo-image-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import poll from "../assets/community/poll.png"
import pin from "../assets/community/pin.png"
import { useNavigation } from "@react-navigation/native";
import imageIcon from "../assets/community/image.png";
import location from "../assets/community/location.png";
import poll from "../assets/community/poll.png";
import pin from "../assets/community/pin.png";
import { StatusBar } from "expo-status-bar";

const NewPost = ({navigation}) => {
    const [post, setPost] = useState({
        title: '',
        category: '',
        content: '',
        imgs: '',
        date: null,
    })
	const navigation = useNavigation()
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('카테고리');

    const [inputHeight, setInputHeight] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
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
    const setDate = async () => {
        var uploadDate = new Date(); 
        
        return await uploadDate.toLocaleString();
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
                    onPress={async () => {
                        // navigation.navigate('Community', {post: post});
                        //TODO)) 날짜를 만드는 함수 넣기
                        await handleInputChange('date', setDate());
                        console.log(post);
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
                    <Modal animationType="slide"
                    transparent={true}
                    onRequestClose={()=>setModalVisible(!modalVisible)}
                    visible={modalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeaderView}>
                                    <Text style={styles.modalTitle}>카테고리 선택</Text>
                                    <Button title="완료" style={styles.modalCloseBtn} onPress={()=>{
                                        setModalVisible(!modalVisible)
                                        handleInputChange('category', category);}}>
                                    </Button>
                                </View>
                                <View style={styles.radioView}>
                                    <View style={styles.radioLabel}>
                                        <TouchableOpacity>
                                            <Text style={styles.radioTxt}>일상</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.radioTxt}>취업</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.radioTxt}>학교</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.radioTxt}>공모전</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <RadioGroup 
                                        radioButtons={radioButtons}
                                        onPress={setCategory}
                                        selectedId={category}
                                        containerStyle={{
                                            flexDirection: 'column', 
                                            // backgroundColor: '#F2F2F2',
                                            gap: 24,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                    {/* <DropDownPicker
                        name="category" 
                        open={open}
                        onPress={()=> setModalVisible(true)}
                        value={category}
                        items={items}
                        setOpen={setOpen}
                        setValue={setCategory}
                        setItems={setItems}
                        disableBorderRadius={true}
                        onChangeValue={(value) => handleInputChange('category',value)}
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
                    /> */}
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