import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
      <StatusBar style={Platform.OS == "ios" ? "light" : "auto"}></StatusBar>
    </View>
  );
};

export default CartScreen;
