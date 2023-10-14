import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Connexion from "../sreens/Connexion";
import Formulaire from "../sreens/Formulaire";
import Produit from "../sreens/Produit";
import AddProduit from "../sreens/AddProduit";

const AppNavigation=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="auth" component={Connexion} />
        <Stack.Screen options={{ header: () => null}}  name="formulaire" component={Formulaire} />
        <Stack.Screen options={{ header: () => null }}  name="produit" component={Produit} />
        <Stack.Screen   name="add" component={AddProduit} />
      </Stack.Navigator>
    )

}

export default AppNavigation