import { View, StyleSheet, StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ActionButton from "@/components/actionButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"
import { commonStyles } from "@/styles/commonStyles";
import { AppText } from "@/components/appText";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={commonStyles.mainView}>
      <StatusBar barStyle="light-content" />
      <View
        style={styles.container}
      >
        <View style={styles.topBar}>
          {<AppText style={styles.text}> Add a Task</AppText>}
          <ActionButton onPress={() => router.push("/add-task")}>
            <Ionicons name="add" size={32} color="black" />
          </ActionButton>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: '#25292e',

  },
  topBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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