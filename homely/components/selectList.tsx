import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropsWithChildren, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { AppText } from "./appText";
type SelectListProps = PropsWithChildren<{
  label: string
}>;

export function SelectList({ label, children }: SelectListProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Pressable style={styles.selectContainer} onPress={() => setIsVisible(true)}>
        <AppText style={styles.text}>{label}</AppText>
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{label}</Text>
            <Pressable onPress={() => setIsVisible(false)}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "normal"
  },
  selectContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: "#fff",
    height: 40,
    borderRadius: 4
  },
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});