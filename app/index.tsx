import { Href, Redirect } from "expo-router";

const App = () => {
  return <Redirect href={"/(stack)/home" as Href} />;
};

export default App;
