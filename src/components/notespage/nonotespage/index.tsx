import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function NoNotesPage() {
    return (
        <View>
            <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: "40%" }}>
                <Icon name="description" size={50} />
                <Text style={{ textAlignVertical: "center",fontSize:15,fontFamily:"Nunito-Regular",color:"black" }}>You don't have any notes</Text>
            </View>
        </View>
    )
}

export default NoNotesPage;