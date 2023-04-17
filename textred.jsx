import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";

export default function Color(props) {

    return (

        <View>
            <Text style={[styles.male, { color: props.textColor }]}>{props.text}</Text>
        </View>
    );


}