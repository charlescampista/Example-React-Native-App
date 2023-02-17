import Example from "./src/pages/Example";
import Home from "./src/pages/Home";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Home/>
  );
}


