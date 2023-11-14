import { StyleSheet } from "react-native";

import { View } from "react-native";
import Text from "../../components/Text";
import { StatusBar } from "expo-status-bar";

export default function BookmarkScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Bookmarks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#000",
  },
});
