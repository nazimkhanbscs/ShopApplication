import React from "react";
import { View, Text, Alert } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import styles from "../home/styles";
import { variables } from "../../constants/theme";

const ProductOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="refresh-ccw"
          size={22}
          color={variables.colors.orange500}
          onPress={() => Alert.alert("could not refresh")}
        />
        <Text
          style={{ ...styles.headerTitle, color: variables.colors.orange500 }}
        >
          Food App
        </Text>
        <Icon
          name="toggle-left"
          size={22}
          color={variables.colors.orange500}
          onPress={() => Alert.alert("could not switch")}
        />
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.info}>ProductOverviewScreen</Text>
      </View>
    </View>
  );
};

export default ProductOverviewScreen;
