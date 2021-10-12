import * as React from "react";
import { Modal, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
  visible: any;
  setVisible: any;
}

const PopUp = (props: Props) => {
  const { visible, setVisible } = props;
  const toggleModal = () => setVisible(!visible);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <>
      <Modal
        style={styles.modal}
        visible={visible}
        onDismiss={toggleModal}
        contentContainerStyle={containerStyle}
      >
        <TouchableOpacity onPress={toggleModal}>
          <Text>Esta función todavía no está disponible</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 200,
    height: 100,
    marginTop: 200,
    marginLeft: -30,
  },
});
export default PopUp;
