import React,{ useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
export const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
   
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        }
      else {
      setShowModal(false) 
        }
    };
  
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <View
            style={styles.modalContainer}>
            {children}
          </View>
        </View>
      </Modal>
    );
  };
  const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      height:'80%'
    },
    header: {
      width: '100%',
      height: 20,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });