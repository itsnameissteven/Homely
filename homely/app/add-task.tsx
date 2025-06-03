import { AppText } from "@/components/appText";
import { Button } from "@/components/button";
import { SelectList } from "@/components/selectList";
import { commonStyles } from "@/styles/commonStyles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FORM = { name: '', description: "" };
const FREQUENCY = [{ label: "Once" }, { label: "Daily" }, { label: "Weekly" }, { label: "Bi-Weekly" }].map(r => ({ ...r, value: r.label }))
export default function AddTask() {
  const [form, setForm] = useState(FORM)
  const router = useRouter();
  return (

    <SafeAreaView style={commonStyles.mainView}>
      <AppText style={styles.text}>Add a New Task</AppText>
      <View style={styles.textContainer}>
        <AppText style={styles.label}>Task Name</AppText>
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
      <View style={styles.textContainer}>
        <AppText style={styles.label}>Description</AppText>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Description"
          placeholderTextColor={"#fff"}
          onChangeText={text => setForm(prev => {
            return {
              ...prev,
              description: text
            }
          })}
          value={form.description}
          style={styles.textInput}
        />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.label}>Frequency</AppText>
        <SelectList label={"Frequency"} options={FREQUENCY} onSelect={() => null} />
      </View>
      <View style={styles.btnContainer}>
        <Button style={styles.btn}>
          <AppText>Submit</AppText>
        </Button>
        <Button style={styles.btn}
          onPress={router.back}
        >
          <AppText>Cancel</AppText>
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20
  },
  label: {
    marginStart: 4,
  },
  text: {

    fontSize: 24,

  },
  input: {
    height: 40,
    margin: 12,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    color: "#fff",
    borderColor: "#fff",
    padding: 10,
  },
  textInput: {
    padding: 10,
    margin: 12,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    color: "#fff",
    borderColor: "#fff",
    height: 100,
    textAlignVertical: "top",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  btn: {
    width: "45%"
  }
});