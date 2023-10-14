import { Text, TextInput, TouchableOpacity, View } from "react-native"
import {cstyle,styless,fstyle} from "../components/style"
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
const Connexion=({ navigation},props:any)=>{
 const [email,setEmail]=useState('')
 const [password,setPsw]=useState('')
    return(
        <View style={cstyle.con}>
            <View>
            <Text style={cstyle.ftitle}>Connexion</Text>
            </View>
          
            <View style={cstyle.elevetedSection}>
                <View>
                    <Text>Email</Text>
                    <TextInput style={styless.frm_input} placeholder="Email"
                    onChange={(e)=>setEmail(e)}/>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput style={styless.frm_input} placeholder="Password" textContentType="password"/>
                </View>
                <View>
                    <TouchableOpacity  style={cstyle.frm_input}
                    onPress={()=>navigation.navigate("produit")}
                    >
                        <Text style={fstyle.txt}>
                        Connexion 
                        </Text>
                       
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{marginTop:20}}
                onPress={()=>navigation.navigate("formulaire")}
                >
                    <Text style={fstyle.txtn}>don't have an account? create</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Connexion