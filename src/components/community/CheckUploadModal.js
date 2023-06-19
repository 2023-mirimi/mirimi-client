import React from "react";
import { Modal, StyleSheet,View, Text,Pressable } from "react-native";
//{ visible, /*onClose*/ }
const CheckUploadModal = () => {
  return (
<View>
    <Modal visible={true} 
      backdropOpacity={1} style={styles.modal}>
      {/* <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}> */}
        <Text>Hello World</Text>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            // onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        {/* </View> */}
      </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    background: {
      backgroundColor: 'transparent'        
  },
  },
  modalView: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default CheckUploadModal;
