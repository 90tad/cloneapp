import React from 'react';
import { ImageBackground, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as mConst from '../const/dimenson'

const Item = props => {

    const { firstname, lastname, date, avt, img, content } = props.item

    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log('press')}>
            <ImageBackground source={{ uri: img }} style={styles.imgBg} imageStyle={{ borderRadius: 10 }}>
                <Image source={{ uri: avt }} style={styles.img}></Image>
                <Text style={styles.text}>{`${firstname} ${lastname}`}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: mConst.HEIGHT / 3,
        width: mConst.HEIGHT / 6,
        marginHorizontal: 5,
        marginVertical: 10
    },
    imgBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    img: {
        width: 46,
        height: 46,
        borderRadius: 23,
        borderWidth: 1,
        borderColor: 'dodgerblue',
        marginTop: 8,
        marginLeft: 8
    },
    text: {
        justifyContent: 'flex-end',
        color: 'white',
        marginBottom: 8,
        marginHorizontal: 8
    }
})

export default Item