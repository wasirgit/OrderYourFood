import { FlatList } from "react-native";

import products from "@/assets/data/products";
import ProductListItem from "../../components/ProductListItem";

export default function MenuScreen() {
  return (
    <FlatList
      numColumns={2}
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    ></FlatList>
  );
}
