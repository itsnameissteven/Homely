import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ActionButton from "@/components/actionButton";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskForm from "@/components/taskForm";
import { useState } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>

      <View
        style={styles.container}
      >
        <View style={styles.topBar}>
          <Text style={styles.text}> Add a Task</Text>
          <ActionButton onPress={() => setIsVisible(true)}>
            <Ionicons name="add" size={32} color="black" />
          </ActionButton>
        </View>
        <TaskForm isVisible={isVisible} onClose={() => setIsVisible(false)}>
          <Text>Select</Text>
        </TaskForm>
      </View>
    </SafeAreaView>
  );
}

export const options = {
  headerShown: false,
};

export const screenOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#25292e',
    borderWidth: 1,
  },
  topBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  }
});