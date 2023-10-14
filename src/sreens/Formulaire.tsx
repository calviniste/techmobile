import React, { useState } from "react"
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Step1 from "../components/Step1"
import { fstyle,cstyle } from '../components/style'
import Step2 from "../components/Step2"
import Step3 from "../components/Step3"
const Formulaire = ({navigation}) => {
    const [etape, setEtape] = useState(1)
    return (
        <View style={styles.frm}>
            <View>
                <Text style={cstyle.ftitle}>
                    Create New Account
                </Text>
            </View>
            <View style={fstyle.elevetedSection}>
                <View style={fstyle.stepbtn}>
                    <TouchableOpacity style={fstyle.neutre} onPress={()=>setEtape(1)}>
                        <Text style={fstyle.txtselect}>1</Text>
                        <Text style={fstyle.txt}>Your Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={etape>1?fstyle.neutre:fstyle.notactivesetep}  onPress={()=>setEtape(2)}>
                        <Text style={etape>1?fstyle.txtselect:fstyle.txtnotselect}>2</Text>
                        <Text style={etape>1?fstyle.txt:fstyle.txtn}>Business Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={etape>2?fstyle.neutre:fstyle.notactivesetep}  onPress={()=>setEtape(3)}>
                        <Text style={etape>2?fstyle.txtselect:fstyle.txtnotselect}>3</Text>
                        <Text style={etape>2?fstyle.txt:fstyle.txtn}>Addional Users</Text>
                    </TouchableOpacity>
                </View>
                {
                    etape == 1 ?
                        <Step1 />
                        :
                        <View>
                            {
                                etape == 2 ?
                                    <Step2 /> :
                                    <Step3 />
                            }
                        </View>

                }

            </View>




            <View style={styles.frm_btn}>
                {
                    etape == 1 ?
                        <TouchableOpacity style={styles.frm_btn_itemLeft} disabled onPress={() => setEtape(Number(etape) - Number(1))}>
                            <Text>Prev</Text></TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.frm_btn_itemLeft} onPress={() => setEtape(Number(etape) - Number(1))}>
                            <Text>Prev</Text></TouchableOpacity>
                }

                <Text style={fstyle.txtnotselect}>{etape}</Text>
                {
                    etape == 3 ?
                        <TouchableOpacity style={styles.frm_btn_itemRight}  onPress={() => navigation.navigate('produit')}><Text>Confirmer</Text></TouchableOpacity>

                        :
                        <TouchableOpacity style={styles.frm_btn_itemRight} onPress={() => setEtape(Number(etape) + Number(1))}><Text>Next</Text></TouchableOpacity>

                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    frm: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 40,
        width: '100%',
        height: "100%",
        backgroundColor: '#fff'
    },
    frm_input: {
        borderColor: "#000",
        minWidth: '80%',
        height: 40,
        marginVertical: 20,
        borderWidth: 1,
        padding: 10,
    },
    frm_btn: {
        display: 'flex',
        flexDirection: "row",
        width: "80%",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    frm_btn_itemLeft: {
        borderWidth: 1,
        borderColor: "#8fcdfd",
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        paddingHorizontal: 10,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:1,
        backgroundColor:'#fff',
        width:65
    },
    frm_btn_itemRight: {
        borderWidth: 1,
        borderColor: "#8fcdfd",
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        paddingHorizontal: 10,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:1,
        backgroundColor:'#8fcdfd',
        width:65
    }

})

export default Formulaire