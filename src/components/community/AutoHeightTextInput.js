import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";

const AutoHeightTextInput = ({placeholder}) => {
    const [inputHeight, setInputHeight] = useState(0);

    const handleContentSizeChange = (event) => {
        setInputHeight(event.nativeEvent.contentSize.height);
    };

    return (
        <TextInput
        multiline={true}
        onContentSizeChange={handleContentSizeChange}
        placeholder={placeholder}
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
        />
    );
}

export default AutoHeightTextInput;