import React from 'react';
import { Chip, Title } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native'

const ChipContainer = ({ title, chip1, chip2, chip3 }) => {

    const { container, text, chip, chipContainer, icon } = styles

    return (
        <View style={container}>
            <View style={text}>
                <Title>{title}</Title>
                <Icon name='md-search' size={22} color={'dimgray'} style={icon}></Icon>
            </View>
            <View style={chipContainer}>
                {chip1 ? <Chip style={chip}>{chip1}</Chip> : null}
                {chip2 ? <Chip style={chip}>{chip2}</Chip> : null}
                {chip3 ? <Chip style={chip}>{chip3}</Chip> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chipContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'flex-start'
    },
    chip: {
        marginRight: 5
    },
    icon: {
        alignSelf: 'center',
    }
})

export default ChipContainer