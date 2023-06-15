import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");

  const handleLongPress = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // AsyncStorage에 데이터 저장
      await AsyncStorage.setItem(`schedule_${props.id}`, text);

      setIsEditing(false);
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  useEffect(() => {
    // AsyncStorage에서 데이터 불러오기
    const loadData = async () => {
      try {
        const savedText = await AsyncStorage.getItem(`schedule_${props.id}`);
        if (savedText !== null) {
          setText(savedText);
        }
      } catch (error) {
        console.log("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <TouchableWithoutFeedback onLongPress={handleLongPress}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          paddingTop: 23,
          paddingLeft: 2,
          borderColor: "#E9E9E9",
          borderWidth: 0.3,
        }}
      >
        {isEditing ? (
          <TextInput
            maxLength={15}
            value={text}
            onChangeText={setText}
            onBlur={handleSave}
            autoFocus
            style={{ color: "black", fontSize: 14 }}
          />
        ) : (
          <Text style={{ color: "black", fontSize: 14 }}>{text}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
