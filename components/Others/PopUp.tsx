import * as React from "react";
import { Modal, Text, Button } from "react-native-paper";

interface Props {
  content: any;
}

const PopUp = (props: Props) => {
  const { content } = props;
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => setVisible(!visible);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <>
      <Modal
        visible={visible}
        onDismiss={toggleModal}
        contentContainerStyle={containerStyle}
      >
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
      <Button style={{ marginTop: 120 }} onPress={toggleModal}>
        {content}
      </Button>
    </>
  );
};

export default PopUp;
