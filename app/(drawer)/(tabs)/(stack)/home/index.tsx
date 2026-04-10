import CustomButton from "@/components/CustomButton";
import { Href, Link, router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          children="Products"
          onPress={() => router.push("/products" as Href)}
          className="mb-10"
        />

        <CustomButton
          children="Profile"
          onPress={() => router.push("/profile" as Href)}
          color="secondary"
          variant="text-only"
          className="mb-10"
        />

        <CustomButton
          children="Settings"
          onPress={() => router.push("/settings" as Href)}
          color="tertiary"
          variant="text-only"
          className="mb-10"
        />

        <Link href={"/products" as Href} asChild>
          <CustomButton children="Products" color="primary" className="mb-10" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
