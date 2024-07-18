import products from "@/assets/data/products";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="edit"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

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
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
});

export default ProductDetailsScreen;
