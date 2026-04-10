import { Href, Redirect } from "expo-router";

const App = () => {
  // return <Redirect href={"/(stack)/home" as Href} />;
  // return <Redirect href={"/drawer" as Href} />;
  return <Redirect href={"/home" as Href} />;
};

export default App;
