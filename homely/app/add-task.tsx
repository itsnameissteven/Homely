import { AppText } from "@/components/appText";
import { commonStyles } from "@/styles/commonStyles";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FORM = { name: '' }
export default function AddTask() {
  const [form, setForm] = useState(FORM)
  return (

    <SafeAreaView style={commonStyles.mainView}>
      <AppText style={styles.text}>Add a New Task</AppText>
      <View style={styles.textContainer}>
        <AppText>Task Name</AppText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setForm(prev => {
            return {
              ...prev,
              name: text
            }
          })}
          value={form.name}
          placeholder='Task Name'
          placeholderTextColor={"#fff"}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    color: "#fff",
    borderColor: "#fff",
    padding: 10,
  },
});