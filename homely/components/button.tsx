import { Pressable, PressableProps, StyleSheet } from "react-native";

export function Button(props: PressableProps) {
  return (
    <Pressable {...props} style={StyleSheet.flatten([styles.btn, props.style])}>
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 6,
  },
});