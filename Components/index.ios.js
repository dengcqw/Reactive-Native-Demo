/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var PAOverseaCustomerAddingInfo = require('./PAOverseaCustomerAddingInfo');
var FlexExample = require('./flexExamples');
var TabBarExample = require('./TabBarIOSExample');
var GridlayoutSample = require('./GridlayoutSample.js');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var AwesomeProject = React.createClass({
    render: function() {
                //< PAOverseaCustomerAddingInfo />
                //< FlexExample />
                //< TabBarExample />
        return (
            < View style = { styles.container } >
            < GridlayoutSample />
            < /View >
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    tabBarStyle: {

    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
