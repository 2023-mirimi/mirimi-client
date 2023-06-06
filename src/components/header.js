import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

const Header = ({name}) => {

    return(
        <View style={styles.header}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image source={require('../assets/header/menu.png')} style={styles.leftIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity style={styles.menuBtn}>
          <Image source={require('../assets/header/bell.png')} style={styles.leftIcon}></Image>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: 375,
        height: 44,
        marginTop: 44,
        backgroundColor: '#fff',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16, 
        
      },
      title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
      },
})

export default Header;