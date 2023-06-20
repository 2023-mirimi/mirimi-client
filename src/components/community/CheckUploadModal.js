import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
//{ visible, /*onClose*/ },Image
const CheckUploadModal = ({visible, onClose, keepOpen}) => {
  return (
    <View>
      <Modal
        visible={visible}
        backdropOpacity={0.5}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            {/* <View/> */}
            <Image source={require("../../assets/community/modal.png")} />
            <Text style={styles.modalText}>잠깐!</Text>
            <View style={{}}>
              <Text style={styles.modalSmallText}>
                이대로 업로드를 할까요?{" "}
              </Text>
              <Text style={styles.modalSmallText}>
                작성한 내용을 확인해주세요.
              </Text>
            </View>
            <Pressable
              style={[styles.cancelButton, styles.cancel]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <TouchableOpacity onPress={keepOpen}>
                <Text style={styles.textStyle2}>아뇨, 좀 더 수정할래요.</Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.textStyle}>네 이대로 업로드할래요!</Text>
              </TouchableOpacity>
            </Pressable>

            {/* </View> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
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
    width: 242,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },
  button: {
    borderRadius: 8,
    padding: 14,
    width: 210,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#17E381",
  },
  cancelButton: {
    borderRadius: 8,
    padding: 14,
    width: 210,
    elevation: 2,
    marginTop: 24,
  },
  cancel: {
    backgroundColor: "#E9E9E9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle2: {
    color: "#5A5A5A",
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
    textAlign: "center",
    fontSize: 17,
    color: "#5A5A5A",
  },
});

export default CheckUploadModal;
