import { Image, StyleSheet, Text, View } from "react-native"

const ProduitItem=(props:any)=>{
    return(
        <View style={styles.pitem}>
            <View style={styles.pitem_img}>
            <Text>img</Text>
            </View>
           
            <View style={styles.pitem_txt}>
                <Text style={styles.pitem_title}>{props.nom}</Text>
                <Text>{props.montant}</Text>
                <Text>{props.devise}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    pitem:{
        display:'flex',
        flexDirection:"row",
        elevation:3,
        margin:5,
        padding:10,
        height:120,
        borderRadius:5,
        backgroundColor:"#fff",
        minWidth:'90%'
    },
    pitem_img:{
        width:'35%',
        borderWidth:1,
        height:'100%',
        borderRadius:5,
        borderColor:'#8fcdfd'
    },
    pitem_txt:{
        marginHorizontal:10,
        display:"flex",
        flexDirection:"column"
    },
    pitem_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#8fcdfd'
    }
})
export default ProduitItem