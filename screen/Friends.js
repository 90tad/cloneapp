import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Title, Chip, Divider, Subheading, Headline } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AddRequestItem from '../components/FriendAddRequestItem'
import ChipContainer from '../components/ChipContainer'
import { connect } from 'react-redux';


const chipContainerProps = {
    title: 'Bạn bè',
    chip1: 'Gợi ý',
    chip2: 'Tất cả bạn bè'
}

class Friends extends Component {

    // static navigationOptions =
    //     {
    //         title: 'Friends',
    //     };

    _listHeaderComponent = () => {
        return (
            <View>
                <ChipContainer {...chipContainerProps} />
                <Divider />
                <Subheading style={{ marginTop: 12 }}>Lời mời kết bạn</Subheading>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <FlatList
                        style={{ padding: 12 }}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={this._listHeaderComponent}
                        data={this.props.data}
                        renderItem={data => <AddRequestItem item={data.item} />}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.getData.data,
    }
}

export default connect(mapStateToProps)(Friends)

