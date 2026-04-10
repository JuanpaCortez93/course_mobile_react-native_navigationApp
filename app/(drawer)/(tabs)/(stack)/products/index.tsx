import { products } from "@/store/products.store";
import { Href, Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black me-4">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2 me-4">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={`/products/${item.id}` as Href}
                className="text-primary"
              >
                Details
              </Link>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default ProductsScreen;
