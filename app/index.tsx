import { Href, Redirect } from "expo-router";

const App = () => {
  // return <Redirect href={"/(stack)/home" as Href} />;
  return <Redirect href={"/drawer" as Href} />;
};

export default App;
