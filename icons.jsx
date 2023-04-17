import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icones(props) {

    return (

        <View style={[style.box, { backgroundColor: props.color }]}>
            <Text style={[style.text, { color: props.textColor }]}>{props.text}</Text>
            <MaterialCommunityIcons name="tea" size={48} color="black" />
        </View>
    );


}


const style = StyleSheet.create({

    box: {
        backgroundColor: '#fffafa',
        color: "black",
        borderRadius: 10,
        width: 112,
        height: 80,
        marginLeft: 25,
        flex: 1,
        alignItems: "center",
    },

    text: {
        color: "black",
        fontSize: 16,
    },


});