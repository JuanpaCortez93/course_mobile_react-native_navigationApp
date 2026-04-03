import { Href, Link } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        <Link href={"/products" as Href} className="mb-5">
          Products
        </Link>
        <Link href={"/profile" as Href} className="mb-5">
          Profile
        </Link>
        <Link href={"/settings" as Href} className="mb-5">
          Settings
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
