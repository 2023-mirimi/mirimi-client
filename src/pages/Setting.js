import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import profile from '../assets/mypage/profile.png';
import { Entypo, AntDesign } from '@expo/vector-icons';

const Setting = ({ navigation }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [userName, setUserName] = useState('');
  const [grade, setGrade] = useState(0);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://10.96.124.161:3300/account/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      console.log("Data: ", data);
  
      if (response.ok) {
        console.log(data);
        setUserName(data.name);
        setGrade(data.grade);
        setNickname(data.nickname);
        setEmail(data.email);
        setPw(data.password);
      } else {
        console.log('Failed to fetch user data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => setIsEditable(!isEditable)}
        >
          <Text>{isEditable ? '저장' : '수정'}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isEditable]);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={profile}/>
        <View style={styles.plus_container}>
          <TouchableOpacity style={styles.plus}>
            <AntDesign name="plus" size={10} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.name_container}>
        <Text style={styles.name}>{userName}</Text>
        <TouchableOpacity>
          <Entypo name="edit" size={14.5} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.input_container}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput style={styles.input} editable={isEditable}>{nickname}</TextInput>
      </View>
      <View style={styles.input_container}>
        <Text style={styles.label}>학교 메일</Text>
        <TextInput style={styles.input} editable={isEditable}>{email}</TextInput>
      </View>
      <View style={styles.input_container}>
        <Text style={styles.label}>학생정보</Text>
        <TextInput style={styles.input} eeditable={isEditable}>{grade}</TextInput>
      </View>
      <View style={styles.input_container}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput style={styles.input} editable={isEditable}>{pw}</TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plus_container: {
    position: 'relative',
  },
  plus: {
    position: 'absolute',
    right: -1,
    bottom: -30,
    width: 18,
    height: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: 'rgba(217, 217, 217, 1)'
  },
  name_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 8,
    marginTop: 24,
    marginBottom: 124
  },
  input_container: {
    display: "flex",
    rowGap: 8,
    marginBottom: 22
  },
  label: {
    fontWeight: 500
  },
  input: {
    width: 327,
    height: 48,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    color: 'rgba(138, 138, 138, 1)'
  }
});

export default Setting;