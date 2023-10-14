import { View, TextInput, Text } from "react-native"
import {styless} from './style'
const Step3 = (props:any) => {
    return (
        <View style={styless.step}>
            <View style={styless.stephe}>
    
                <Text>Addational User</Text>
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

export default Step3