/**
 * ArbitraryGridLayoutView.js
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
    Dimensions,
    AlertIOS,
    Text,
} = React;

/**
 * Globle Variable
 */
var topLayout;
var topViewList;

var alert = function(msg) {
    AlertIOS.alert(
        'Title',
        String(msg),
        [
            {text: 'OK', onPress: () => console.log('OK Pressed!')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'},
        ]
    )
}

function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed");
}

var output = [];

/**
 * Reactive Native Class
 */
var ArbitraryGridView = React.createClass({

    _layoutSubViews: function(layout, viewList) {
        var flexs = layout.flexRatio.split(':');
        flexs = flexs.map(function (element, index) {
            return Number(element);
        });

        var direction;
        var subLayouts;
        var borderStyle;

        if ( layout.left === undefined ) {
            direction = 'column',
            subLayouts = [layout.top, layout.bottom];
            borderStyle = styles.bottomBorder;
        } else {
            direction = 'row',
            subLayouts = [layout.left, layout.right];
            borderStyle = styles.rightBorder;
        }

        var subViews = [];
        for (var idx = 0; idx < subLayouts.length; idx++) {

            var layout = subLayouts[idx];
            var dynamicKey;
            var subView;

            if (layout.flexRatio == undefined) { // no more subview
                subView = viewList[idx];
                dynamicKey = 'ArbGrd' + '-' + direction + String(topViewList.indexOf(subView));
            } else {
                var partViews = viewList.slice(idx);
                subView = this._layoutSubViews(layout, partViews);
                dynamicKey = 'ArbGrd' + '-' + 'sub' + '-' + String(viewList.length);
            }
            output.push(dynamicKey);

            if ( layout.left === undefined ) {
                direction = 'column';
            } else {
                direction = 'row';
            }

            subViews.push(
                < View key ={dynamicKey} style = {[ idx===0? borderStyle : {}, {flex:flexs[idx], flexDirection:direction, overflow: 'hidden',} ]} >
                    {subView}
                < /View >
            );
        }

        return subViews;
    },

    componentWillMount: function () {
        if (this.props.children != undefined) {
            topViewList = this.props.children;
        } else if (this.props.views != undefined){
            topViewList = this.props.views;
        }

        topLayout = this.props.layout;
    },

    render: function() {
        var direction = (topLayout.left === undefined)? 'column' : 'row';

        return (
            <View style = {[styles.container, styles.topBorder, styles.bottomBorder, {flexDirection:direction} ]}>
                { this._layoutSubViews(topLayout, topViewList) }
            </View>
        );
    },

    componentDidMount:function () {
         alert(output);
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        height:160,
        overflow: 'hidden',
    },
    topBorder: {
        borderTopWidth:0.5,
        borderColor:'#DDD8CE'
    },
    leftBorder: {
        borderLeftWidth:0.5,
        borderColor:'#DDD8CE'
    },
    bottomBorder: {
        borderBottomWidth:0.5,
        borderColor:'#DDD8CE'
    },
    rightBorder: {
        borderRightWidth:0.5,
        borderColor:'#DDD8CE'
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
exports.examples = {
    render: function() {
        <ArbitraryGridView
            layout = {
                {
                    left:{
                        top:{},
                        bottom:{},
                        flexRatio:"1:2"
                    },
                    right:{},
                    flexRatio:"1:1",
                }
            }
            views = {[
                topView,bottomView,rightView,
            ]}
        />
    },
}

/**
 * Private Component
 */
module.exports = ArbitraryGridView;
