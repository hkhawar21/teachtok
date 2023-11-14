import { View } from "react-native";
import Heading from "../Heading";
import styles from "../Styles";
import Text from "../Text";
import { FontAwesome } from "@expo/vector-icons";

export default function Header(): JSX.Element {
  return (
    <View style={[styles.spacedRow, { flex: 0 }]}>
      <View style={styles.row}>
        <FontAwesome size={28} color="#fff" name="clock-o" />
        <Text>{"  "}10m</Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Heading>For You</Heading>
        <View style={styles.headerTextBorderView} />
      </View>
      <View>
        <FontAwesome size={28} color="#fff" name="search" />
      </View>
    </View>
  );
}
