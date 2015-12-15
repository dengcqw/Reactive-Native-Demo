/**
 * template.js
 * haofangtuo

 * Created by DengJinlong on 12/11/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict'

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    TextInput,
    Image,
} = React;

/**
 * Global Variable
 */

/**
 * Reactive Native Class
 */
var ComponentName = React.createClass({
    getInitialState: function() {
        return { // variable here can use by 'this.state'
        };
    },

    render: function() {
        // process state here

        return (
            < View style = { styles.container }>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    // other view element style here
});

/**
 * Private Class
 */


/**
 * Exports
 */
exports.title = 'template file'
exports.description = 'This is template file for iOS Reactive Native develop! Enjoy it.'

/**
 * Private Component
 */
//module.exports = ComponentName;
/**
 * Public Component
 *
//AppRegistry.registerComponent('ComponentName', () => ComponentName);
