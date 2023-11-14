import { Text, View } from "react-native";
import styles from "../Styles";

type QuestionProps = {
  question: string;
};

export default function Question({ question }: QuestionProps): JSX.Element {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
}
