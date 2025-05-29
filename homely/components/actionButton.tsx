import { View, StyleSheet, Pressable } from "react-native";


type ActionButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

export default function ActionButton({ children, onPress }: ActionButtonProps) {
  return (
    <View
      style={styles.container}
    >
      <Pressable style={styles.button} onPress={onPress}>
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 25
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
})