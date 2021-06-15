import React from "react";
import { Text, View } from "react-native";
import styles from "../../pages/home/styles";
import { variables } from "../../constants/theme/index";
import ProductOverviewScreen from "../shop/ProductOverviewScreen";

export default function Home() {
  return (
    <View>
      <ProductOverviewScreen />
    </View>
  );
}
