import { Href, Redirect } from "expo-router";

const App = () => {
  // return <Redirect href={"/(stack)/home" as Href} />;
  return <Redirect href={"/tabs" as Href} />;
};

export default App;
