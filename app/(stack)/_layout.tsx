import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
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
