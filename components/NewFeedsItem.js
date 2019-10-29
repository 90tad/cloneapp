import React from 'react';
import { Avatar, Card, Paragraph, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const Item = props => {

    const { firstname, lastname, date, avt, img, content } = props.item

    return (
        <Card
            elevation={0}
            style={styles.card}>
            <Card.Title
                right={() => <IconButton icon='more-vert' color={'gray'} onPress={() => console.log('press')} />}
                title={`${firstname} ${lastname}`}
                subtitle={date}
                left={() => <Avatar.Image size={46} source={{ uri: avt }} />} />
            <Card.Cover source={{ uri: img }} />
            <Card.Content>
                <Paragraph style={{ marginTop: 10 }}>{content}</Paragraph>
            </Card.Content>
            <Card.Actions style={{ justifyContent: 'flex-end' }}>
                <IconButton icon='tag-faces' color='gray' />
                <IconButton icon='chat' color='gray' />
                <IconButton icon='share' color='gray' />
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 0,
        marginBottom: 12
    }
})

export default Item