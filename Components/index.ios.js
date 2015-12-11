/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var PAOverseaCustomerAddingInfo = require('./PAOverseaCustomerAddingInfo');
var FlexExample = require('./flexExamples');

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
                < PAOverseaCustomerAddingInfo />
                < FlexExample />
            < /View >
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
