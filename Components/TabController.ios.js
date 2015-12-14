/**
 * TabController.ios.js
 * haofangtuo

 * Created by DengJinlong on 12/12/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict';

var React = require('react-native');
var paColor = require('./PAColorDef');

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TabControllerIOS,
} = React;

var paTabController = React.createClass({

    getInitialState: function() {
        return {
        };
    },

    render: function() {

        return (
            < View style = { styles.container }>
            </View>
        );
    },

    // Private Process
    _onPress: function() {
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

var tt = new Date();

/**
 * Public Component
 */
AppRegistry.registerComponent('paTabController', () => paTabController);
