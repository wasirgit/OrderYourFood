import products from "@/assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { defaultPizzaImage } from "../../components/ProductListItem";
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => {
    return p.id.toString() == id;
  });

  if (!product) {
    return <Text> Product Not Found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }}></Stack.Screen>

      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
      ></Image>

      <Text style={styles.title}>${product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
});

export default ProductDetailsScreen;
