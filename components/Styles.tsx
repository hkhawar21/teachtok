import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  spacedContainer: {
    justifyContent: "space-between",
    flex: 1,
  },

  // Home
  headerTextContainer: {
    position: "absolute",
    left: "45%",
  },

  headerTextBorderView: {
    top: 5,
    height: 4,
    backgroundColor: "#fff",
    width: "60%",
    alignSelf: "center",
  },

  questionText: {
    fontFamily: "SFProRoundedMedium",
    padding: 6,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 8,
    fontSize: 28,
    color: "#fff",
  },

  optionContainer: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  correctOptionContainer: {
    backgroundColor: "rgba(40, 177, 143, 0.70)",
  },
  wrongOptionContainer: {
    backgroundColor: "rgba(220, 95, 95, 0.70)",
  },

  optionText: {
    textShadowColor: "#000",
    fontSize: 17,
    fontFamily: "SFProRoundedMedium",
    color: "#fff",
    flexWrap: "wrap",
  },

  userNameText: {
    marginTop: 16,
    fontSize: 15,
  },
  questionDescription: {
    fontSize: 13,
    marginTop: 6,
  },

  playlistContainer: {
    backgroundColor: "#161616",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  playIconsContainer: {
    alignSelf: "flex-end",
    marginBottom: 16,
    marginLeft: 8,
  },

  iconContainer: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default styles;
