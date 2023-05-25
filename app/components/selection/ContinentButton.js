import React from "react";

import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function ContinentButton({ continentName, color }) {
  const { setFieldValue } = useFormikContext();
  return (
    <AppButton
      title={continentName}
      onPress={() => setFieldValue("continent", continentName)}
      color={color}
    />
  );
}

export default ContinentButton;
