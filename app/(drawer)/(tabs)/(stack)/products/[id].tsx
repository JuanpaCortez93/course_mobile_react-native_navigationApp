import { products } from "@/store/products.store";
import {
  Href,
  Redirect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Product",
    });
  });

  if (!product) return <Redirect href={"/" as Href} />;

  return (
    <View className="px-5 mt-10">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black text-primary">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
