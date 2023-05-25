import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import GET_COUNTRIES_BY_CONTINENT from "../api/query";
import GET_DETAILS from "../api/detailsQuery";
import CountryTable from "../components/CountryTable";
import continents from "../assets/continents";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function DiscoverScreen({ route, navigation }) {
  const [temp, setTemp] = useState();
  const [allReady, setAllReady] = useState(false);
  const [details, setDetails] = useState();
  const { values } = route.params;
  const chosenContinent = continents.filter(
    (continent) => continent.name === values.continent
  )[0].code;
  const { data: countriesFromContinent, error: countriesError } = useQuery(
    GET_COUNTRIES_BY_CONTINENT,
    {
      variables: { continentCode: chosenContinent },
      onCompleted: () => {
        const chosenCountries = getMultipleRandom(
          countriesFromContinent.countries,
          values.number
        ).flatMap((country) => country.code);
        setTemp(chosenCountries);
      },
    }
  );

  const { data, error } = useQuery(GET_DETAILS, {
    variables: { countryCodes: temp },
    skip: !temp,
    onCompleted: () => {
      const sortedCountries = [...data.countries].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setDetails(sortedCountries);
      setAllReady(true);
    },
  });
  if (!allReady) {
    return (
      <Text>
        {error || countriesError
          ? "An unexpected problem occured"
          : "Loading..."}
      </Text>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {details.map((country) => {
          return <CountryTable key={country.code} country={country} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DiscoverScreen;
