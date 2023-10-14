import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { cstyle, styless, fstyle } from "../components/style"
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from "react-native-image-picker";
import { useState } from "react";
import ImagePicker from 'react-native-image-picker';
import img from "../assets/im.png"
const AddProduit = ({ navigation }, props: any) => {
  const [image, setImage] = useState(img)
  const pickImage = () => {
    // launchImageLibrary({mediaType: 'photo'}, ({didCancel, assets}) => {
    //   if (!didCancel) {
    //     setImage(assets);
    //   }
    // });



    launchImageLibrary(
      { includeBase64: true, mediaType: 'photo' },
      ({ didCancel, assets }) => {
        if (!didCancel) {
          setImage(assets);
        }
      },
    );
  };



  return (
    <View style={cstyle.con}>
      <View>
        <Text style={cstyle.ftitle}>Create Produit</Text>
      </View>

      <View style={cstyle.elevetedSectio}>
        <View>
          <Text>Name</Text>
          <TextInput style={styless.frm_input} placeholder="Email" />
        </View>
        <View>
          <Text>Mount</Text>
          <TextInput style={styless.frm_input} placeholder="Password" textContentType="password" />
        </View>
        <View>
          <Text>Currency</Text>
          <TextInput style={styless.frm_input} placeholder="Password" textContentType="password" />
        </View>
        <View>
          <Text>Image</Text>
          <TextInput style={styless.frm_input} placeholder="Password" textContentType="password" />
        </View>
        <TouchableOpacity
          onPress={pickImage}
        >
          <Image
            width={10}
            height={10}
            source={image}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={cstyle.frm_input}
            onPress={() => navigation.goBack()}
          >
            <Text style={fstyle.txt}>
              create
            </Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AddProduit