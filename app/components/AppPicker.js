import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Platform,
  View,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";
import colors from "../config/colors";
import AppButton from "./AppButton";

function AppPicker({
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {placeholder && (
            <AppText style={styles.text}>
              {selectedItem ? selectedItem : placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.menu}
            size={30}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppButton title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <PickerItemComponent
              label={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        ></FlatList>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "black",
    flex: 1,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
    width: "30%",
    paddingRight: 2,
    alignContent: "center",

    borderRadius: 12,
    borderColor: colors.secondary,
    borderWidth: 3,
  },
});

export default AppPicker;
