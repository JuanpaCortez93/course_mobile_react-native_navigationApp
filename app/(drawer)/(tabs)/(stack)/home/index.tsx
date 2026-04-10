import CustomButton from "@/components/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Href, Link, router, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

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

        <CustomButton className="mb-10" onPress={onToggleDrawer}>
          Abrir Menú
        </CustomButton>

        <Link href={"/products" as Href} asChild>
          <CustomButton children="Products" color="primary" className="mb-10" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
