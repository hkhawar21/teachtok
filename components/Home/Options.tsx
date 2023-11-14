import { Text, TouchableOpacity, View } from "react-native";
import { Answer } from "../../constants/Types/MCQs";
import styles from "../Styles";
import { CorrectThumb, WrongThumb } from "../../assets/icons";

type OptionsProps = {
  options: Answer[];
  answerSelected: string | undefined;
  handleAnswerSelect: (id: string) => void;
  correctAnswer: string | undefined;
};

export default function Options({
  options,
  answerSelected,
  handleAnswerSelect,
  correctAnswer,
}: OptionsProps): JSX.Element {
  return (
    <View>
      {options.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.optionContainer,
            !answerSelected
              ? null
              : item.id === correctAnswer
              ? styles.correctOptionContainer
              : answerSelected === item.id && item.id !== correctAnswer
              ? styles.wrongOptionContainer
              : null,
          ]}
          onPress={() => handleAnswerSelect(item.id)}
        >
          <Text style={styles.optionText}>{item.answer}</Text>
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              height: 36,
              bottom: 18,
            }}
          >
            {answerSelected && item.id === answerSelected ? (
              item.id === correctAnswer ? (
                <CorrectThumb />
              ) : (
                <WrongThumb />
              )
            ) : null}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
