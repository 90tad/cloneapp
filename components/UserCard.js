import React from 'react';
import { Avatar, Card, Paragraph, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native'

const imgUrl = require('../assets/download.jpg')

const UserCard = props => {

    return (
        <Card
            elevation={0}
            style={styles.card}
            onPress={props.onPress}>
            <Card.Title
                title='Nasus'
                left={() => <Avatar.Image size={46} source={imgUrl} />
                } />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        borderRadius: 0
    }
})

export default UserCard