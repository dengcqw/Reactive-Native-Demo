/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var PAOverseaCustomerAddingInfo = require('./PAOverseaCustomerAddingInfo');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var AwesomeProject = React.createClass({
    render: function() {
        return (
            < View style = { styles.container } >
                < PAOverseaCustomerAddingInfo style = { styles.overseaCustomerAddingInfo } />
            < /View >
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    overseaCustomerAddingInfo: {
        width: 200,
        height: 200,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
