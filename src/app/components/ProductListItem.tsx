import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const ProductListItem = ({ product }) => {
  console.log(product);
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image}></Image>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}> ${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },

  image: {
    width: "100%",
    aspectRatio: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
});

export default ProductListItem;
