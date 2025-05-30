
import {
  StyleSheet,
  Text,
  TextProps
} from "react-native";

export function AppText(props: TextProps) {
  return <Text {...props} style={StyleSheet.flatten([styles.text, props.style])}>{props.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold"
  },
})