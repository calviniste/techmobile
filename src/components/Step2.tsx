import { View, TextInput, Text } from "react-native"
import {styless} from './style'
const Step2 = (props:any) => {
    return (
        <View style={styless.step}>
            <View style={styless.stephe}>
    
                <Text>Business Information</Text>
            </View>
             <View >
                <Text>Brand  Name*</Text>
                <TextInput style={styless.frm_input} placeholder="Full name" />
            </View>
            <View>
                <Text>City*</Text>
                <TextInput style={styless.frm_input} placeholder="Email" />
            </View>
            <View>
                <Text>Street Address*</Text>
                <TextInput style={styless.frm_input} placeholder="Password" />
            </View>
            
        </View>
    )
}

export default Step2