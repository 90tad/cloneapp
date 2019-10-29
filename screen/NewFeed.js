import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, Text, StatusBar } from 'react-native';
import { getData } from '../fetchData'
import Item from '../components/NewFeedsItem'
import { Avatar, Card, Paragraph, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import UserCard from '../components/UserCard'
import StoriesItem from '../components/StoriesItem'
import { connect } from 'react-redux';
import { fetchData } from '../action/getData'
import { bindActionCreators } from 'redux';


class NewFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchData()
  }

  _listHeaderComponent = () => {
    return (
      <View>
        <UserCard onPress={() => console.log('press')} />
        <Card style={{ marginBottom: 10, borderRadius: 0 }} elevation={0}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.data}
            renderItem={data => <StoriesItem item={data.item} />}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </View>
    )
  }

  render() {

    const { isFetching, data } = this.props

    return (
      <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
        {isFetching ?
          <ActivityIndicator size="large" color="#0c9" style={{ justifyContent: 'center', flex: 1 }} /> :
          <View>
            <FlatList
              ListHeaderComponent={this._listHeaderComponent}
              data={data}
              renderItem={data => <Item item={data.item} />}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.getData.data,
    isFetching: state.getData.isFetching,
    error: state.getData.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchData }, dispatch)

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewFeeds)

