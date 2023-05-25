import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import GET_COUNTRIES_BY_CONTINENT from "../api/query";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function DiscoverScreen({ route, navigation }) {
  const [temp, setTemp] = useState();
  const [allReady, setAllReady] = useState(false);
  const { values } = route.params;
  const { data, loading, error } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: { continentCode: "AF" },
  });

  useEffect(() => {
    if (!loading && !error) {
      const chosenCountries = getMultipleRandom(
        data.countries,
        values.number
      ).flatMap((country) => country.code);
      console.log("nie czekam");
      console.log("tu", chosenCountries);
      setTemp(chosenCountries);
      setAllReady(true);
    }

    return () => {
      console.log("clean");
    };
  }, [data, loading, error]);

  return (
    <View style={styles.container}>
      <Text>{allReady ? temp[0] : "Loading"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DiscoverScreen;
