import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PasswordItem({ data, removePassword }){
    return(
        <Pressable onLongPress={removePassword} style={styles.contaier}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contaier:{
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFF'
    }
})