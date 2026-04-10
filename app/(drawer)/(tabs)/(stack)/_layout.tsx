import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeft = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop());
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
        headerLeft: ({ tintColor, canGoBack }) => {
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            className="mr-5"
            onPress={() => onHeaderLeft(canGoBack)}
          ></Ionicons>;
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
      <Stack.Screen
        name="products/index"
        options={{ title: "Products Screen", animation: "ios_from_left" }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{ title: "Product", animation: "flip" }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Profile Screen", animation: "fade_from_bottom" }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Settings Screen", animation: "slide_from_bottom" }}
      />
    </Stack>
  );
};

export default StackLayout;
