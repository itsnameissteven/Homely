import { StyleSheet, View } from "react-native";

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})