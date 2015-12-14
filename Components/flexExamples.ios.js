/**
 * flexExamples
 * haofangtuo

 * Created by DengJinlong
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

/*
 * http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
 * just push this Component on screen size view
 */

'use strict'

var React = require('react-native');
var paColor = require('./PAColorDef');

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} = React;

/**
 * Const Variable
 */

/**
 * Reactive Native Class
 */

var flexExamples = React.createClass({
    getInitialState: function() {
        return { // variable here can use by 'this.state'
        };
    },

    render: function() {
        // process state here

        return (
            < View style = { styles.container } >
                < View style = { styles.rowStyle } >
                    < Text style = { styles.textStyle } >1/2< /Text >
                    < Text style = { styles.textStyle_1 } >1/2< /Text >
                < /View >
                < View style = { styles.rowStyle } >
                    < Text style = { styles.textStyle } >1/3< /Text >
                    < Text style = { styles.textStyle } >1/3< /Text >
                    < Text style = { styles.textStyle } >1/3< /Text >
                < /View >
            < /View >
        );
    },
});

var styles = StyleSheet.create({
    container: {// level 1
        //flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        //alignSelf:'flex-start',
        backgroundColor: '#F5FCFF',
    },

    rowStyle: {// level 2
        flex: 1,
        flexDirection: 'row',
        //alignSelf: "flex-start",
        backgroundColor: paColor.purple,
    },

    textStyle_1: {// level 3
        flex: 1,
        backgroundColor: paColor.gray,
        fontSize: 30,
        //margin: 3,
        color: paColor.blue,
        borderColor: paColor.red,
        borderWidth: 1,
    },
    textStyle: {// level 3
        flex: 2,
        backgroundColor: paColor.gray,
        fontSize: 30,
        //margin: 3,
        color: paColor.blue,
        borderColor: paColor.red,
        borderWidth: 1,
    },

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
 * Private flexExamples
 */
module.exports = flexExamples;
