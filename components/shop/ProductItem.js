import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.detail}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Alert.alert("Can not show the details")}
          >
            <Text style={styles.text}>View Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Alert.alert("Item Added to the Cart")}
          >
            <Text style={styles.text}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    height: "60%",
    width: "100%",
  },
  detail: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 15,
  },
  buttonContainer: {
    height: 40,
    width: 100,
  },
  button: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.primary,
    textAlign: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    padding: 10,
  },
});

export default ProductItem;
