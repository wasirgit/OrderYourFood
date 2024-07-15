import { FlatList, Platform, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Button from "./components/Button";
import CartListItem from "./components/CartListItem";
import { useCart } from "./providers/CartProvider";
const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={(item) => <CartListItem cartItem={item.item} />}
      ></FlatList>

      <Text>Total: ${total}</Text>
      <Button text="Checkout " />

      <StatusBar style={Platform.OS == "ios" ? "light" : "auto"}></StatusBar>
    </View>
  );
};

export default CartScreen;
