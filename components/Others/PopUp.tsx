import * as React from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";

const PopUp = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => setVisible(!visible);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={toggleModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={toggleModal}>
        Show
      </Button>
    </Provider>
  );
};

export default PopUp;
