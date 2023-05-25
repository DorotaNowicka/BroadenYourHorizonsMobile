import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AppButton from "./app/components/AppButton";
import ContinentButton from "./app/components/selection/ContinentButton";
import { Formik } from "formik";

import continents from "./app/assets/continents";
import PickerItem from "./app/components/PickerItem";
import AppPicker from "./app/components/AppPicker";
import AppFormPicker from "./app/components/selection/AppFormPicker";
import AppText from "./app/components/AppText";
import Header from "./app/components/Header";
//import AppFormPicker from "./app/components/selection/AppFormPicker";

export default function App() {
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
