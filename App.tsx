import Connexion from "./src/sreens/Connexion"
import { NavigationContainer } from "@react-navigation/native"
import Formulaire from "./src/sreens/Formulaire";
import AppNavigation from "./src/navigations/AppNavigation";
const App = () => {
 
  return (
   
   <NavigationContainer> 
    <AppNavigation/>
   </NavigationContainer>
    
  )
}

export default App
