import NewFeeds from '../screen/NewFeed'
import Friends from '../screen/Friends'
import Group from '../screen/Group'
import Live from '../screen/Live'
import Noti from '../screen/Noti'
import Setting from '../screen/Setting'
import React, { Component } from 'react';

import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-paper';
import { View } from 'react-native'

const TabNavigator = createMaterialTopTabNavigator(
    {
        NewFeeds: {
            screen: NewFeeds,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon size={26} name={focused ? 'md-paper' : 'md-paper'} style={{ color: tintColor }} />
                ),
            }
        },
        Friends: {
            screen: Friends,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon size={26} name='md-person-add' style={{ color: tintColor }} />
                )
            }
        },
        Group: {
            screen: Group,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon size={26} name='md-people' style={{ color: tintColor }} />
                )
            }
        },
        Live: {
            screen: Live,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon size={26} name='md-tv' style={{ color: tintColor }} />
                )
            }
        },
        Noti: {
            screen: Noti,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={26} name='md-notifications' style={{ color: tintColor }} />
                        <Badge size={15} style={{ position: 'absolute', justifyContent: 'flex-start' }}>3</Badge>
                    </View>
                )
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon size={26} name='md-menu' style={{ color: tintColor }} />
                )
            }
        }
    },

    {
        initialRouteName: "NewFeeds",
        tabBarOptions: {
            elevation: false,
            inactiveTintColor: 'gray',
            activeTintColor: 'dodgerblue',
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: 'white',
                elevation: 0,
                borderBottomWidth: 0.5, 
                borderBottomColor: 'lightgray'
            },
            indicatorStyle: { backgroundColor: 'dodgerblue' }
        }
    }
)
export default createAppContainer(TabNavigator);




