/**
 * PAOverseaCustomerAddingInfo.js
 * haofangtuo

 * Created by DengJinlong on 12/11/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict'

var React = require('react-native');
var paColor = require('./PAColorDef');

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    ActionSheetIOS,
} = React;

/**
 * Const Variable
 */
var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
/**
 * Reactive Native Class
 */

var PAOverseaCustomerAddingInfo = React.createClass({

    getInitialState: function() {
        return { // variable here can use by 'this.state'
            selected: true,
        };
    },

    render: function() {
        // process state here
        return (
            < TouchableHighlight
                underlayColor = { paColor.gray }
                style = { styles.container, this.state.selected?styles.selectedStyle:styles.normalStyle }
                onPress = { this._onPressButton }
            >
                < Text style = { styles.textStyle } > Wellcome < /Text >
            </TouchableHighlight >
        );
    },

    _onPressButton: function () {
        //ActionSheetIOS.showActionSheetWithOptions({
            //options: BUTTONS,
            //cancelButtonIndex: CANCEL_INDEX,
            //destructiveButtonIndex: DESTRUCTIVE_INDEX,
        //},
        //(buttonIndex) => {
            //this.setState({ clicked: BUTTONS[buttonIndex] });
        //},);
        if (this.state.selected === true) // use setState()
            this.setState({selected: false});
        else
            this.setState({selected: true});
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // other view element style here
    selectedStyle: {
        backgroundColor: paColor.BlueColor,
        borderWidth: 2,
        borderColor: paColor.OrangeColor,
    },
    normalStyle: {
        backgroundColor: paColor.GreenColor,
    },
    textStyle: {
        color: paColor.OrangeColor,
    }
});

/**
 * Private Class
 */


/**
 * Exports
 */
exports.title = 'PAOverseaCustomerAddingInfo';
exports.description = 'add oversee customer info';

/**
 * Public Component
 *
//AppRegistry.registerComponent('ComponentName', () => ComponentName);

/**
 * Private Component
 */
module.exports = PAOverseaCustomerAddingInfo;
