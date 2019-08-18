import { Dimensions, Platform, StyleSheet, StatusBar } from "react-native";
import Colors from "../constants/Colors";
import { BORDER_RADIUS } from "../constants/styleConstants";
import Shadow from "../lib/Shadow";

const { height, width } = Dimensions.get("window");

const cardShared = {
  padding: 10,
  backgroundColor: Colors.cardBackground,
  marginBottom: 5,
  marginTop: 5,
  borderRadius: BORDER_RADIUS,
  ...Shadow(3),
  marginLeft: Platform.OS === "ios" ? 1 : 0,
  marginRight: Platform.OS === "ios" ? 1 : 0,
};

export default StyleSheet.create({
  app: {
    backgroundColor: Colors.pageBackground,
    flex: 1,
  },
  card: StyleSheet.flatten([
    cardShared,
    {
      flexDirection: "column",
    },
  ]),
  circle: {
    borderColor: Colors.textColor,
    borderRadius: 5,
    borderWidth: 1,
    height: 10,
    width: 10,
  },
  circularIcon: {
    backgroundColor: Colors.textInputBackground,
    borderRadius: 80,
    marginRight: 10,
    padding: 10,
  },
  horizontal: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    alignSelf: "stretch",
    backgroundColor: Colors.black,
    flex: 1,
    height: undefined,
    marginTop: 50,
    width: undefined,
  },
  liveIndicator: {
    borderRadius: 5,
    flex: 0,
    marginRight: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  mainTab: {
    paddingTop: StatusBar.currentHeight,
  },
  mainTabBlur: {
    bottom: 0,
    height: 60,
    left: 0,
    right: 0,
    top: undefined,
  },
  oldCard: StyleSheet.flatten([
    cardShared,
    {
      flexDirection: "column",
      backgroundColor: Colors.oldCardBackground,
    },
  ]),
  paddedIcon: {
    marginLeft: 5,
    marginRight: 5,
  },
  page: {
    backgroundColor: Colors.pageBackground,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.pageBackground,
    height,
    width,
  },
  pageNoScrollContainer: {
    paddingTop: 10,
  },
  pageScrollContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  pageScrollView: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  resultCard: StyleSheet.flatten([
    cardShared,
    {
      marginTop: 5,
      marginBottom: 10,
      marginLeft: 2,
      marginRight: 2,
    },
  ]),
  spacer: {
    flex: 1,
  },
});
