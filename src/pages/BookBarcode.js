import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import barcode from '../assets/mypage/barcode.png';
import save from '../assets/mypage/save.png';
import saved from '../assets/mypage/saved.png';
import { useState } from 'react';

const BookBarcode = () => {
    const [isHovering, setIsHovering] = useState(0);

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>3학년 3반 11번 하진</Text>
                    <Image source={barcode} style={styles.barcode}/>
                    <Text>S210282</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPressIn={() => setIsHovering(1)}
                        onPressOut={() => setIsHovering(0)}
                        style={isHovering ? styles.pressedButton : styles.button}
                    >
                        <Text
                            onPressIn={() => setIsHovering(1)}
                            onPressOut={() => setIsHovering(0)}
                            style={isHovering ? styles.pressedText : ''}
                        >이미지 저장</Text>
                        <Image 
                            onPressIn={() => setIsHovering(1)}
                            onPressOut={() => setIsHovering(0)}
                            source={isHovering ? saved : save}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(23, 227, 129, 1)'
    },
    container: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
        backgroundColor: 'rgba(250, 250, 250, 1)'
    },
    box: {
        width: 226,
        height: '100%',
        marginTop: -80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(65, 65, 65, 1)'
    },
    barcode: {
        width: 226,
        height: 112,
        marginTop: 16
    },
    button: {
        width: 226,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgba(138, 138, 138, 1)',
        borderRadius: 12
    },
    pressedButton: {
        width: 226,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgba(23, 227, 129, 1)',
        borderRadius: 12
    },
    pressedText: {
        color: 'rgba(23, 227, 129, 1)'
    }
});

export default BookBarcode;