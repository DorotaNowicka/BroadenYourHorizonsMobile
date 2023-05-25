import { Platform } from "react-native";
import colors from "../config/colors";

export default {
  colors,
  text: {
    flex: 1,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  },
  bgimage: {
    flex: 1
  },
  logo: {
    width: 180,
    height: 140,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center"
  }
};
