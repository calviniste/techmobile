import { View, TextInput, Text } from "react-native"
import {styless} from './style'
const Step1 = (props:any) => {
    return (
        <View style={styless.step}>
            <View style={styless.stephe}>
    
                <Text>Your profil</Text>
            </View>
             <View >
                <Text>Full Name*</Text>
                <TextInput style={styless.frm_input} placeholder="Full name" />
            </View>
            <View>
                <Text>Email*</Text>
                <TextInput style={styless.frm_input} placeholder="Email" />
            </View>
            <View>
                <Text>Password*</Text>
                <TextInput style={styless.frm_input} placeholder="Password" />
            </View>
            <View>
                <Text>confirme Password*</Text>
                <TextInput style={styless.frm_input} placeholder="Email" />
            </View>
        </View>
    )
}

export default Step1