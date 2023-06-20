import React from "react";
import { Modal, StyleSheet, View, Text, Pressable, Image } from "react-native";
//{ visible, /*onClose*/ },Image
const CheckUploadModal = () => {
  return (
    <View>
      <Modal
        isVisible={true}
        backdropOpacity={0.6}
        transparent={true}
        style={styles.modal}
        animationType="slide"
      >
        {/* <View style={/{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}> */}
        <View style={styles.modalView}>
          {/* <View/> */}
            <Image source={require("../../assets/community/modal.png")} />
            <Text style={styles.modalText}>잠깐!</Text>
            <View style={{}}>
              <Text style={styles.modalSmallText}>이대로 업로드를 할까요? </Text>
              <Text style={styles.modalSmallText}>작성한 내용을 확인해주세요.</Text>
            </View>
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          {/* </View> */}

          {/* </View> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    background: {
      backgroundColor: "transparent",
    },
  },
  modalView: {
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 24,

  },
  modalSmallText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#5A5A5A',
  }
});

export default CheckUploadModal;
