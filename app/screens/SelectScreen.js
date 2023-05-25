import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AppButton from "../components/AppButton";
import ContinentButton from "../components/selection/ContinentButton";
import { Formik } from "formik";

import continents from "../assets/continents";
import PickerItem from "../components/PickerItem";
import AppPicker from "../components/AppPicker";
import AppFormPicker from "../components/selection/AppFormPicker";
import AppText from "../components/AppText";
import Header from "../components/Header";
import routes from "../navigation/routes";

function SelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Formik
        initialValues={{
          continent: "",
          number: 2,
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate(routes.DISCOVER_SCREEN);
        }}
      >
        {({
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
        }) => (
          <View style={styles.container}>
            <AppText>Choose continent to explore:</AppText>
            <View style={styles.continentsContainer}>
              {continents.map((continent) => {
                return (
                  <ContinentButton
                    key={continent.name}
                    continentName={continent.name}
                    color={
                      continent.name === values.continent
                        ? "primary"
                        : "secondary"
                    }
                  />
                );
              })}
            </View>
            <View style={styles.numberContainer}>
              <AppText>How many countries you want to discover?</AppText>
              <AppFormPicker
                items={Array.from({ length: 9 }, (_, i) => i + 2)}
                name="number"
                placeholder={"2"}
              />
            </View>
            <AppButton title="SEARCH" onPress={handleSubmit} width={250} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  continentsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 2,
  },
  numberContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 2,
  },
});

export default SelectScreen;
