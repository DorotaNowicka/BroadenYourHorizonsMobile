import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import ContinentButton from "../components/selection/ContinentButton";
import { Formik } from "formik";
import * as Yup from "yup";

import continents from "../assets/continents";

import AppFormPicker from "../components/selection/AppFormPicker";
import AppText from "../components/AppText";
import Header from "../components/Header";
import routes from "../navigation/routes";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  continent: Yup.string().required("Continent is required"),
  number: Yup.number()
    .typeError("Number must be a valid number")
    .min(2, "Number must be at least 2")
    .max(10, "Number must be at most 10")
    .required("Number is required"),
});

function SelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Formik
        initialValues={{
          continent: "",
          number: 2,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigation.navigate(routes.DISCOVER_SCREEN, { values: values });
        }}
      >
        {({
          errors,
          touched,

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
            {errors.continent && touched.continent && (
              <AppText style={styles.error}>{errors.continent}</AppText>
            )}
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
  error: {
    color: colors.wrong,
  },
  numberContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 2,
  },
});

export default SelectScreen;
