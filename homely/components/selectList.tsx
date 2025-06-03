import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fragment, PropsWithChildren, useState } from "react";
import { GestureResponderEvent, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppText } from "./appText";
import { Separator } from "./separator";

type Option = { label: string, value: string }

type SelectListProps = PropsWithChildren<{
  label: string
  options: { label: string, value: string }[]
  onSelect: (option: Option, e: GestureResponderEvent) => void
}>;

export function SelectList({ label, options, onSelect }: SelectListProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("");

  const onPress = (option: Option, e: GestureResponderEvent) => {
    setSelected(option.label);
    onSelect(option, e);
    setIsVisible(false);
  }

  return (
    <View>
      <Pressable style={styles.selectContainer} onPress={() => setIsVisible(true)}>
        <AppText style={styles.text}>{selected || label}</AppText>
        <Ionicons name={isVisible ? "chevron-up" : "chevron-down"} color="#fff" size={22} />
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{label}</Text>
            <Pressable onPress={() => setIsVisible(false)}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          <ScrollView style={styles.optionsContainer}>
            {options.map((o, i) => {
              return (
                <Fragment key={"select" + i}>
                  <Pressable style={styles.optionBox} onPress={(e) => onPress(o, e)}>
                    <AppText style={styles.optionText}>{o.label}</AppText>
                  </Pressable>
                  {i < options.length - 1 && <Separator />}
                </Fragment>
              )
            })}
          </ScrollView>
        </View>
      </Modal >
    </View >
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "normal"
  },
  selectContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    margin: 12,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#fff",
    height: 40,
    borderRadius: 4
  },
  modalContent: {
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
  optionsContainer: {
    display: "flex",
    paddingBottom: 40,
    paddingTop: 10,
    paddingHorizontal: 12
  },
  optionBox: {
    justifyContent: "center",
    display: "flex",
    height: 35,
  },
  optionText: {
    textAlign: "center"
  }
});