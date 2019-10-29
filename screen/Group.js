import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChipContainer from '../components/ChipContainer'

const chipContainerProps = {
    title: 'Nhóm',
    chip1: 'Nhóm của bạn',
    chip2: 'Khám phá',
    chip3: 'Tạo'
}

export default class Group extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 12 }}>
                <ChipContainer {...chipContainerProps} />
            </View>
        );
    }
}

