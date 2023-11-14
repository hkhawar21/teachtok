import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import useMCQs from "./useMCQs";
import Header from "../Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Question from "../Question";
import styles from "../../Styles";
import Options from "../Options";
import Text from "../../Text";
import Heading from "../../Heading";
import {
  AddQuestion,
  Bookmark,
  Comment,
  Heart,
  Playlist,
  Share,
} from "../../../assets/icons";
import { FontAwesome } from "@expo/vector-icons";

const MCQs = () => {
  const { data, answerSelected, handleAnswerSelect, correctAnswer, isLoading } =
    useMCQs();
  const { top } = useSafeAreaInsets();

  if (!data) return null;

  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: data.image }} style={styles.container}>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            paddingTop: top + 20,
            flex: 1,
            paddingHorizontal: 20,
          }}
        >
          <Header />
          <View style={[styles.spacedRow]}>
            <View
              style={[
                styles.spacedContainer,
                {
                  flex: 1,
                  height: "90%",
                  marginTop: 40,
                },
              ]}
            >
              <Question question={data.question} />
              <View>
                <Options
                  options={data.options}
                  answerSelected={answerSelected}
                  handleAnswerSelect={handleAnswerSelect}
                  correctAnswer={correctAnswer}
                />
                <View>
                  <Heading style={styles.userNameText}>
                    {data.user.name}
                  </Heading>
                  <Text style={styles.questionDescription}>
                    {data.description}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.playIconsContainer}>
              <AddQuestion />
              <View style={styles.iconContainer}>
                <Heart />
                <Text>87</Text>
              </View>
              <View style={styles.iconContainer}>
                <Comment />
                <Text>2</Text>
              </View>
              <View style={styles.iconContainer}>
                <Bookmark />
                <Text>203</Text>
              </View>
              <View style={styles.iconContainer}>
                <Share />
                <Text>17</Text>
              </View>
            </View>
          </View>
          {/* For right side icons */}
        </View>
      </ImageBackground>
      <View style={styles.playlistContainer}>
        <View style={styles.row}>
          <Playlist />
          <Text>
            {"  "}Playlist • {data.playlist}
          </Text>
        </View>
        <FontAwesome name="chevron-right" color="#fff" />
      </View>
    </View>
  );
};

export default MCQs;
