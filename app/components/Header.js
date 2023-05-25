import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Broaden Your Horizons</Text>
      <Text style={styles.subheader}>
        Let your worldview go beyond one continent
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 180,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 600,
    color: "white",
    padding: 10,
  },
  subheader: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontStyle: "italic",
    padding: 10,
  },
});

export default Header;
