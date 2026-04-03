import { Href, Redirect } from "expo-router";

const App = () => {
  return <Redirect href={"/home" as Href} />;
};

export default App;
