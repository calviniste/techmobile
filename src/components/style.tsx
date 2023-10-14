import { StyleSheet } from "react-native"

export  const styless=StyleSheet.create({
    frm_input: {
        borderColor: "#8fcdfd",
        minWidth: '80%',
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius:2
    },
    step:{
        display:'flex',
        flexDirection:'column',
        padding:20
    },
    stephe:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
       
    }


})

export const fstyle=StyleSheet.create({
    stepbtn:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingHorizontal:2,
        backgroundColor:"#eeecfc",
        alignItems:'center'
    },
    activesetep:{
        backgroundColor:"#8fcdfd",
        height:40,
        width:"35%",
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        flexDirection:'row',

    },
    neutre:{
        backgroundColor:"#8fcdfd",
        height:40,
        width:"33.3%",
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        flexDirection:'row',
        margin:0,
        
    },
    notactivesetep:{
        height:40,
        width:"35%",
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        flexDirection:'row',

    },
    txtnotselect:{
        backgroundColor:'#bdc7e8',
        color:'#fff',
        height:20,
        width:20,
        borderRadius:50,
        textAlign:'center',
        marginRight:5

    },
    txtselect:{
        backgroundColor:'#fff',
        color:'#8fcdfd',
        height:20,
        width:20,
        borderRadius:50,
        textAlign:'center',
        marginRight:5

    },
    elevetedSection:{
        elevation:2,
        height:'75%',
        width:'97%',
        borderRadius:10,
        backgroundColor:'#fff'
    },
    txt:{
        color:'#fff'
    },
    txtn:{
        color:'#bdc7e8'
    }
})

export const cstyle=StyleSheet.create({
    con:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'center',
        height:'100%',
        backgroundColor:'#fff'
    },
    elevetedSection:{
        elevation:2,
        height:'50%',
        width:'97%',
        borderRadius:10,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    elevetedSectio:{
        elevation:2,
        height:'70%',
        width:'97%',
        borderRadius:10,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    frm_input: {
        borderColor: "#8fcdfd",
        minWidth: '80%',
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius:2,
        backgroundColor:"#8fcdfd",
        display:'flex',
        justifyContent:"center",
        alignItems:'center'
    },
    ftitle:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:18,
        color:"#8fcdfd"
    }
})