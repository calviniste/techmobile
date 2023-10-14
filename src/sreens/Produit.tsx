import { Modal, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import ProduitItem from "../components/ProduitItem"
import { useState } from "react"

const Produit = ({navigation}) => {
    const [visible,setVisible]=useState(false)
    return (
        <View style={styles.pcontainer}>
            <View style={styles.pc_header}>
               
                <View style={styles.pc_header_bottom}>
                    <TextInput style={styles.pc_header_bottom_item} placeholder="Recherche.." />
                </View>
            </View>
            <View style={styles.pc_ctn}>
                <ScrollView>
                    <ProduitItem nom="machine" montant="200" />
                </ScrollView>

            </View>
            <TouchableOpacity style={styles.pc_btn}
            onPress={()=>navigation.navigate('add')}
            >
                <Text style={styles.pc_btn_txt}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    pcontainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor:'#fff'
    },
    pc_header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,


    },
    pc_header_top: {
        height: 60,
        elevation: 1,

        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor:'#0CA2F7'

    },
    pc_btn: {
        position: 'absolute',
        backgroundColor: "#fff",
        height: 50,
        width: 50,
        borderRadius: 50,
        bottom: 30,
        right: 30,
        elevation: 2,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        zIndex: 100,
        borderColor:'#0CA2F7',
        
    },
    pc_btn_txt:{
        fontSize:29,
        fontWeight:"bold",
        color:'#0CA2F7'
    },
    pc_header_bottom:{
        paddingVertical:30,
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        
    },
    pc_header_bottom_item:{
        width:"90%",
        borderRadius:35,
        height:45,
        backgroundColor: '#8fcdfd',
        paddingHorizontal:10
    },
    pc_ctn:{
        marginTop:120,
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        width:'100%'
    }
})
export default Produit