import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import AppText from "./AppText";

function CountryTable({ country }) {
  return (
    <View style={styles.container}>
      <Text style={styles.countryName}>{country.name}</Text>
      <Grid>
        <Col size={50} style={styles.headerColumn}>
          <Row style={styles.cell}>
            <AppText style={styles.headerCell}>Capital</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText style={styles.headerCell}>Code</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText style={styles.headerCell}>Native</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText style={styles.headerCell}>Flag</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText style={styles.headerCell}>Currency</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText style={styles.headerCell}>Languages</AppText>
          </Row>
        </Col>
        <Col size={50}>
          <Row style={styles.cell}>
            <AppText>{country.capital}</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText>{country.code}</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText>{country.native}</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText>{country.emoji}</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText>{country.currency}</AppText>
          </Row>
          <Row style={styles.cell}>
            <AppText>
              {country.languages.flatMap((language) => " " + language.name)}
            </AppText>
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",

    backgroundColor: "#fff",
  },
  headerCell: {
    fontWeight: 800,
  },
  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  countryName: {
    fontSize: 35,
    alignSelf: "center",
    padding: 15,
  },
});

export default CountryTable;
