import React from "react";

import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "secondary",
  width,

  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        { width: width },
      ]}
      onPress={onPress}
      {...otherProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fc5c65",
    borderRadius: 12,
    justifyContent: "center",
    padding: 15,

    alignItems: "center",
    margin: 5,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
