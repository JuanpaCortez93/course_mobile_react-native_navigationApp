import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text style={{ fontFamily: "WorkSans-Black" }}>Hello world!</Text>

        <Text className="font-work-black">Hello world!</Text>
        <Text className="font-work-light">Hello world!</Text>
        <Text className="font-work-medium">Hello world!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
