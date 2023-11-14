import MCQs from "../../components/Home/MCQs/MCQs";
import styles from "../../components/Styles";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MCQs />
    </View>
  );
}
