import React from 'react';
import { Avatar, Card, Paragraph, IconButton, Text, Button } from 'react-native-paper';
import { View } from 'react-native';
import { StyleSheet } from 'react-native'

const btnProps = {
    mode: 'contained',
    uppercase: false,
}

const AddRequestItem = props => {

    const { avt, firstname, lastname } = props.item
    const { container, view, btnView, btn1, btn2 } = styles

    return (
        <View style={container}>
            <View style={{ flex: 1 }}>
                <Avatar.Image size={94} source={{ uri: avt }} />
            </View>
            <View style={view}>
                <Text style={{ fontWeight: 'bold' }}>{`${firstname} ${lastname}`}</Text>
                <Text>12 bạn chung</Text>
                <View style={btnView}>
                    <Button {...btnProps} color={'dodgerblue'} style={btn2}>Chấp nhận</Button>
                    <Button {...btnProps} color={'whitesmoke'} style={btn1}>Xóa</Button>
                </View>
            </View>
        </View>
    )
}

const btn = {
    flex: 1,
    elevation: 0
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
        justifyContent: 'space-around'
    },
    view: {
        marginLeft: 10,
        justifyContent: 'space-around',
        flex: 2.6
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn1: {
        ...btn
    },
    btn2: {
        ...btn, marginRight: 10
    }
})

export default AddRequestItem